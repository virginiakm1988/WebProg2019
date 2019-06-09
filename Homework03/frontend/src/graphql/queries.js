import { gql } from 'apollo-boost'

//GraphQL語法
export const POSTS_QUERY = gql` 
  query {
    posts {
      title
      body
      author {
        name
        _id
      }
      published
    }
  }
`


export const USERS_QUERY = gql` 
query {
  users {
    _id
    name
    age
    email
    posts {
      title
      body
      author { name }
      published
    }
    comments {text}
  }
}
`
