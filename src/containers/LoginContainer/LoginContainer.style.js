import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    fontWeight: '200',
  },
  image: {
    marginTop: 60,
    marginBottom: 60,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  input: {
    margin: 20,
    fontSize: 18,
    fontWeight: '200',
    marginTop: 0,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  loginButton: {
    alignSelf: 'stretch',
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0066cc',
  },
  loginText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '200',
  },
});
