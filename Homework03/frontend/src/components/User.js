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
    console.log("this props",this.props)
    this.state = {
      
      id : this.props.data._id,
      name : this.props.data.name,
      age : this.props.data.age,
      email : this.props.data.email,
      onClick: false,
      like:0
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
        if (error) return <p>error</p>
       //console.log(data.posts[1].author._id)
       data.posts.map(post=>(console.log(post.author._id)))
        const filtered_post = data.posts.filter(post=>(post.author._id===this.state.id))
        console.log(filtered_post)
        const posts = filtered_post.map((post, _id) => (
            <Card>
              <CardBody>
              <div>
                {post.title}
                
                <svg onClick={
                  click=>{
                    console.log("clicked");
                    this.setState({like:this.state.like+1})
              }} style={{float : "right"}} className = "like"  version = "1.1" width= "24" height= "24" viewBox = "0 0 24 24" >
                        <path d = "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z"></path>
                  </svg>
                
              </div>
              
              </CardBody>
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