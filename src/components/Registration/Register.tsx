import { AccountCircle } from "@mui/icons-material"
import { Avatar, Box, Button, Container,Grid ,TextField,Typography} from "@mui/material"

export const Register :React.FC = () =>{
    return (
       <Container>
            <Box  
             display="flex" 
             flexDirection={"column"}
             alignItems="center"
             marginTop={2}
             gap={2}
        
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircle />
        </Avatar>
            <Typography component="h1" variant="h4">
          Register
                 </Typography>
                
                <form  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
               fullWidth
                // value={formValues.firstName}
                // onChange={handleInputChange}
                // error={Boolean(errors.firstName)}
                // helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                // value={formValues.lastName}
                // onChange={handleInputChange}
                // error={Boolean(errors.lastName)}
                // helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="email"
                label="Email Address"
                fullWidth
                // value={formValues.email}
                // onChange={handleInputChange}
                // error={Boolean(errors.email)}
                // helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                // value={formValues.password}
                // onChange={handleInputChange}
                // error={Boolean(errors.password)}
                // helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                // value={formValues.confirmPassword}
                // onChange={handleInputChange}
                // error={Boolean(errors.confirmPassword)}
                // helperText={errors.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt:3 ,mb :3}}
          >
            Register
          </Button>
        </form>
                </Box>
                </Container>
               
    )
}