import React, { Component } from 'react';

import { Query } from 'react-apollo'
import {
  POSTS_QUERY,
  POSTS_SUBSCRIPTION,
} from '../graphql'
import { Card, CardHeader, CardBody } from 'reactstrap'

let unsubscribe = null;


class User extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      
      id : this.props.data.id,
      name : this.props.data.name,
      age : this.props.data.age,
      email : this.props.data.email,
      onClick: false
    }
  };

  onClick(){
    this.setState({
      onClick: !this.state.onClick
    })
  }

  render(){
    if(this.state.onClick)
    {
      return(
        <Card onClick = {this.onClick} style={{ margin: '30px auto', width: '400px' }}>
      <CardHeader>
        {this.state.name}
        <div style = {{float:"right"}}> 
        
        </div>
      </CardHeader>
      
      <CardBody>
      <Query query={POSTS_QUERY}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(((</p>
        
        const filtered_post = data.posts.filter(post=>(post.author.name===this.state.name))
        const posts = filtered_post.map((post, id) => (
            <Card>
              <CardBody>{post.title}</CardBody>
            </Card>
        ))
        if (!unsubscribe)
          unsubscribe = subscribeToMore({
            document: POSTS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev
              const newPost = subscriptionData.data.post.data
  
              return {
                ...prev,
                posts: [newPost, ...prev.posts]
              }
            }
          })
  
        return <div>{posts}</div>
      }}
    </Query>
  
  
      </CardBody>
    </Card>
  
  
      )

    }
    
    
  
  else{
    return(
      <Card onClick = {this.onClick} style={{ margin: '30px auto', width: '400px' }}>
    <CardHeader>
      {this.state.name}
      <div style = {{float:"right"}}> 
      
      </div>
    </CardHeader>
    </Card>

    )
  }
}
}
export default User