import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  CREATE_POST_MUTATION,
  USERS_QUERY
} from '../../graphql'
import User from '../../components/User'
import classes from './App.module.css'


class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      formTitle: '',
      formBody: '',
      dropdownOpen: false,
      dropDownValue: "Author",
      authorId: 1

    };
  }

  changeValue(id,e) {
    console.log("changeValue",id,e)
    this.setState({dropDownValue: e.currentTarget.textContent,
    authorId : id});
  }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const { formTitle, formBody } = this.state

    if (!formTitle || !formBody) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: this.state.authorId
      }
    })

    console.log("change",this.state,this.state.formTitle,this.state.authorId)

    this.setState({
      formTitle: '',
      formBody: '',
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle caret>
                        {this.state.dropDownValue}
                        
                      </DropdownToggle>
                       <Query query = {USERS_QUERY}>
                       {({ loading, error, data, subscribeToMore }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(((</p>
                        const users = data.users.map((user, id) => (
                          <DropdownItem >
                               <div
                                onClick={(e) => this.changeValue(user._id, e)}
                               >{user.name}</div>
                          </DropdownItem>
                          ))
                        return <DropdownMenu>
                              {users}
                              </DropdownMenu>
                      }}
                       </Query>
                    </Dropdown>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs ="6">
          <Query query={USERS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>
                const users = data.users.map((user, id) => (
                    <User data={user} key={id}/>
                  
                ))
                  
               return <div>{users}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
