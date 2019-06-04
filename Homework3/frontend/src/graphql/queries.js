import { gql } from 'apollo-boost'

//GraphQL語法
export const POSTS_QUERY = gql` 
  query {
    posts {
      title
      body
      author {
        name
      }
      published
    }
  }
`


export const USERS_QUERY = gql` 
query {
  users {
    id
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
