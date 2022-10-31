/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import './signUpFormStyles.scss';


function SignUpForm(){
  return(
    <div>
        
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
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              type="password"
              label="Password"
              name="password"
              
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
        // onSubmit={handleSubmit}
      >
        <Grid container  spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              label="Prénom"
              name="firstname"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField color="error"
              label="Nom"
              name="lastname"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
            <TextField color="error"
              label="Email"
              name="email"
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField color="error"
              label="Numéro de rue"
              name="streetNumber"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField color="error"
              label="Rue"
              name="street"
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField color="error"
              label="Code postal"
              name="postalCode"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField color="error"
              label="Ville"
              name="city"
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} >
            <TextField color="error"
              type="password"
              label="Password"
              name="password"
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} >
            <TextField color="error"
              type="password"
              label="Confirmer password"
              name="confirmPassword"
              
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <FormControlLabel
              label="M'inscrire à la newsletter (facultatif)"
              control={(
                <Checkbox
                  color="error"
                  name="newsletter"
                />
              )}
            />
            <FormControlLabel
              label="J'accepte les conditions générales"
              control={(
                <Checkbox
                  color="error"
                  name="generalConditions"
                />
              )}
            />
             <FormControlLabel
              label="J'accepte la politique de confidentialité relative au
              traitement de mes données personnelles"
              control={(
                <Checkbox
                  color="error"
                  name="privacy policy"
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
                // onClick={reset}
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