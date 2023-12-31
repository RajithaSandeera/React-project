import React, {useEffect } from 'react';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux'

import {
  Box, Card, Grid, Typography, Avatar, CardHeader, CardContent,
  Divider, LinearProgress, IconButton
} from '@mui/material'
import { NavLink } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkIcon from '@mui/icons-material/Work';
import style from './ServiceBride.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import maleImg from '../../assets/male.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchUserDetails } from '../../features/auth/authAction';


const ServiceBride = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetails())
  }, [])

  const userDetails = useSelector(state => state.user.userInfo);
  console.log('data',userDetails)
  return (
    <div>
      <h1 className='services'>SERVICE-BRIDE</h1>;
      <Container maxWidth="lg" sx={{ backgroundColor: 'white', borderRadius: '0.4rem', display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 480, maxHeight: '14rem', p: 2, m: 4, borderRadius: '0.4rem', backgroundColor: '#e6e4f7', borderWidth: 'thin', borderColor: 'red' }} >
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={12}>
                <CardHeader
                  avatar={
                    // <Avatar sx={{backgroundColor:'red'}} src="../../assets/male.png"/>
                    <Avatar
                      sx={{ backgroundColor: 'red' }}
                      src="../../assets/male.png"
                      alt="Male Avatar"
                    />
                  }
                  title={
                    <Typography variant="h5" sx={{ fontSize: '20px' }}>
                      Shrimp and Chorizo Paella
                    </Typography>
                  }
                  subheader="September 14, 2016"
                />
                <Grid item xs={12}>
                  <Typography variant="body1" component="div" className={style.icon}>
                    <LocationOnIcon sx={{ mr: 1 }} />
                    <span >Location</span>
                  </Typography>
                </Grid>
                <Grid container item xs={16} columns={12}>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <CakeIcon sx={{ mr: 1 }} />
                      Years: { }
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <PersonIcon sx={{ mr: 1 }} />
                      Nationality: { }
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <LocalLibraryIcon sx={{ mr: 1 }} />
                      Religion: { }
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={16} columns={12}>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <WorkIcon sx={{ mr: 1 }} />
                      Designation: { }
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <SquareFootIcon sx={{ mr: 1 }} />
                      Height
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Typography variant="body1" component="div" className={style.icon}>
                      <LanguageIcon sx={{ mr: 1 }} />
                      Country: { }
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end' }}>
                  <Typography variant="body1" component="div" className={style.icon}>
                    <NavLink>
                      More Details
                    </NavLink>

                  </Typography>
                </Grid>
              </Grid>

            </Box>
          </CardContent>

        </Card>
      </Container>
    </div>
  )
}
export default ServiceBride