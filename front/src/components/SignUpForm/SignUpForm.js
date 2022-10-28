import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function SignUpForm(){
  return(
    <div>
   
   <Box 
   sx={{
     margin: 2
    }}
        component="form"
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit}
      >
        <Grid container  spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstname"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastname"
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField color="error"
              label="Email"
              name="email"
              
              fullWidth
            />
          </Grid>
          

          <Grid item xs={12} spacing={2} container justifyContent="flex-end">
            <Grid item>
              <Button
                variant="outlined"
                type="button"
                // onClick={reset}
              >
                RESET
              </Button>

            </Grid>
            <Grid item>
              <Button
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