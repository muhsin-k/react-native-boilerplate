export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
