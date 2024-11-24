

const initialState = {
  posts: [],
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    }
    case 'REMOVE_POST': {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      }
    }
    case 'UPD_POST_MODIFIER': {
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id
            ? { ...post, modifier: action.payload.modifier }
            : post,
        ),
      }
    }
    default:
      return state
  }
}
