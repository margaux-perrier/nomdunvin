import axios from "axios";

export async function signupRequest(email, firstname, lastname, password, confirmPassword) {
  const response = await axios.post('http://localhost:5000/signup',{
    email, firstname, lastname, password, confirmPassword
  });
  return response.data
}

export async function loginRequest(email, password) {
  const response = await axios.post('http://localhost:5000/login', {
    email, password
  })
  console.log(response.data);
  return response.data


}