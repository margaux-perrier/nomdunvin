/* eslint-disable react/no-unescaped-entities */
import React, {useState} from "react";

// Reducer import
import UseFormReducer, {getActionSetValue, getActionReset} from "../../reducers/UseFormReducer";
import axios from 'axios';
import {signupRequest} from '../../services/userRequests'

//Material UI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import './signUpFormStyles.scss';


function SignUpForm(){
  const [newsletter, setNewsletter] = useState('true');
  const [generalConditions, setGeneralConditions] = useState('false');
  const [RGPD, setRGPD] = useState('true');

  const { formState, formDispatch } = UseFormReducer();
  const reset = () => formDispatch(getActionReset());

  const handleTextFieldChange = (e) => {
    formDispatch(getActionSetValue(e.target.name, e.target.value));
    console.log(e.target.name, e.target.value);
  }

  const handleTextFieldNumberChange = (e) => {
    formDispatch(getActionSetValue(e.target.name, Number(e.target.value)));
  }

  const handleCheckBoxChange = (e) => {
    formDispatch(getActionSetValue(e.target.name, e.target.checked))
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log( formState.firstname)
   await signupRequest(formState.email, formState.firstname, formState.lastname, formState.password, formState.confirmPassword)
  }
  
  return(
    <div className= "container-form">
        
      <div className="connexion">
      <h1 className="title">
          Connexion
        </h1>
        <p className="text">
        Hey Salut l'ami ! Dis moi, on s'est pas déjà vu quelque part?
      </p>
      <Box 
   sx={{
     margin: 5
    }}
        component="form"
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit}
      >
        <Grid container  spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              label="Email"
              name="email"
              // value={formState.email}
              // onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              type="password"
              label="Password"
              name="password"
              // value={formState.password}
              // onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          </Grid>
          </Box>
      </div>
      <h1 className="title">
          Inscription
        </h1>
    
      <p className="text">
        Vous n'avez pas de compte ? On a pourtant comme un air de
déjà vu ... Rejoignez nous en quelques clics !
      </p>

   <Box 
   sx={{
     margin: 5
    }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSignUpSubmit}
      >
        <Grid container  spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              label="Prénom"
              name="firstname"
              value={formState.firstname}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              label="Nom"
              name="lastname"
              value={formState.lastname}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField color="error"
              label="Email"
              name="email"
              value={formState.email}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField color="error"
              label="Numéro de rue"
              name="addressNumber"
              value={formState.addressNumber}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField color="error"
              label="Rue"
              name="addressStreet"
              value={formState.addressStreet}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField color="error"
              label="Code postal"
              name="addressPostal"
              value={formState.addressPostal}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField color="error"
              label="Ville"
              name="addressCity"
              value={formState.addressCity}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} >
            <TextField color="error"
              type="password"
              label="Password"
              name="password"
              value={formState.password}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} >
            <TextField color="error"
              type="password"
              label="Confirmer password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleTextFieldChange}
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <FormControlLabel
              label="M'inscrire à la newsletter (facultatif)"
              control={(
                <Checkbox
                  color="error"
                  value={formState.newsletter}
                  checked={formState.newsletter}
                  name="newsletter"
                  onChange={handleCheckBoxChange}

                />
              )}
            />
            <FormControlLabel
              label="J'accepte les conditions générales"
              control={(
                <Checkbox
                  color="error"
                  name="generalConditions"
                  checked={formState.generalConditions}
                  value={formState.generalConditions}
                  onChange={handleCheckBoxChange}

                />
              )}
            />
             <FormControlLabel
              label="J'accepte la politique de confidentialité relative au
              traitement de mes données personnelles"
              control={(
                <Checkbox
                  color="error"
                  name="RGPD"
                  value= {RGPD}
                  checked={formState.RGPD}
                  onChange={(handleCheckBoxChange)}
                />
              )}
            />
          </Grid>




          

          <Grid item xs={12} spacing={2} container justifyContent="flex-end">
            <Grid item>
              <Button
                color="error"
                variant="outlined"
                type="button"
                onClick={reset}
              >
                RESET
              </Button>

            </Grid>
            <Grid item>
              <Button
                color="error"
                variant="contained"
                type="submit"
              >
                Enregistrer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    
  </div>
  );
}

export default React.memo(SignUpForm);