export const onLogin = username => {
  console.log('User name', username);

  return {
    type: 'LOGIN',
    username,
  };
};
