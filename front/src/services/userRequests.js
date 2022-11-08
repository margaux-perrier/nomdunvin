import apiInstance from './instance'; 

export async function signupRequest(email, firstname, lastname, password, confirmPassword) {
  const response = await apiInstance.post('/signup',{
    email, firstname, lastname, password, confirmPassword
  });
  return response.data
}

export async function loginRequest(email, password) {
  const response = await apiInstance.post('/login', {
    email, password
  })
  console.log(response.data);
  return response.data
}