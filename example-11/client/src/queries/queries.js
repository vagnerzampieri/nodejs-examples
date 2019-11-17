import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
