import apiInstance from './instance'; 

//handle signup request
export async function signupRequest(email, firstname, lastname, password, confirmPassword) {
  const response = await apiInstance.post('/signup',{
    email, firstname, lastname, password, confirmPassword
  });
  return response.data
}

//handle login request
export async function loginRequest(email, password) {
  const response = await apiInstance.post('/login', {
    email, password
  })
  return response.data
}

//handle checking for JWT token when user refresh page
export async function tokenVerifyToStayConnected() {
  const response = await apiInstance.get('/verify');
  return response.data;
}