import axios from 'axios';

const apiInstance = axios.create({
    baseURL: "http://localhost:5000"
  });

  export function setToken(token){
    // sauvegarder le token dans l'instance
    // comme ca, apresè avoir appellé setToken, on peux faire nos requetes sans rien préciser avec l'instance et elles vont toute
    // s'accompagner du Header Authorization
    apiInstance.defaults.headers.common['authorization'] = `Bearer ${token}`;
    console.log(token);
  }; 

  export function removeToken(token){
    apiInstance.defaults.headers.common['authorization'] = "";
  }; 


  export default apiInstance;
