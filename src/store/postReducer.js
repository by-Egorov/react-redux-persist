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
    case 'SORT_BY_NAME_UP': {
      const postsCopy = state.posts.map(post => post)
      return {
        posts: postsCopy.sort((a, b) => (a.title > b.title ? 1 : -1)),
      }
    }
    case 'SORT_BY_NAME_DOWN': {
      const postsCopy = state.posts.map(post => post)
      return {
        posts: postsCopy.sort((a, b) => (a.title < b.title ? 1 : -1)),
      }
    }
    default:
      return state
  }
}
