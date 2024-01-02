import React, { useEffect } from 'react';
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
import style from './ServiceGroom.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import maleImg from '../../assets/male.png';
import femaleImg from '../../assets/female.png';
import { fetchUserDetails } from '../../features/auth/authAction';
import moment from 'moment'



const ServiceGroom = () => {
  const userDetails = useSelector(state => state.user.userInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetails())
  }, [dispatch])

  const calculateAge = (birthdayString) => {
    const birthDate = new Date(birthdayString);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <div>
      <h2 className={style.services}>GROOMS/මනමාලයෝ.</h2>
      <Container maxWidth="lg" sx={{ backgroundColor: '#e6e9ff', borderRadius: '0.4rem', display: 'flex', justifyContent: 'center' }}>
        {userDetails !== null ? (
          <Grid container spacing={4} justifyContent="center">
            {(userDetails.userData !== null && userDetails.userData !== undefined) && userDetails.userData.filter((value) => value.gender === 'male').
            map((value, index) => (
              <Grid item key={index} xs={12} sm={5} sx={{ mt:4,mb:4, ml:0.5 }}> {/* Show 2 cards per row on small screens and above */}
                <Card sx={{ maxWidth: 480, maxHeight: '19rem', pl: 3, mt: 2, borderRadius: '0.4rem', backgroundColor: 'white', borderWidth: 'thin', borderColor: 'red' }}>
                  <CardContent>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid key={index} container spacing={2} columns={12}>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ backgroundColor: 'red' }}
                              src={maleImg}
                              alt="Male Avatar"
                            />
                          }
                          title={
                            <Typography variant="h5" sx={{ fontSize: '20px' }}>
                              {value.firstName}
                            </Typography>
                          }
                          subheader={moment(value.createdAt).format('YYYY/MM/DD')}
                        />
                        <Grid item xs={12}>
                          <Typography variant="body1" component="div" className={style.icon}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <span >{value.city}</span>
                          </Typography>
                        </Grid>
                        <Grid container item xs={16} columns={12}>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <CakeIcon sx={{ mr: 1 }} />
                              {calculateAge(value.birthday)}
                            </Typography>
                          </Grid>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <PersonIcon sx={{ mr: 1 }} />
                              {value.ethnics}
                            </Typography>
                          </Grid>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <LocalLibraryIcon sx={{ mr: 1 }} />
                              {value.religion}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container item xs={16} columns={12}>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <WorkIcon sx={{ mr: 1 }} />
                              {value.profession}
                            </Typography>
                          </Grid>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <SquareFootIcon sx={{ mr: 1 }} />
                              {value.height}
                            </Typography>
                          </Grid>
                          <Grid xs={4}>
                            <Typography variant="body1" component="div" className={style.icon}>
                              <LanguageIcon sx={{ mr: 1 }} />
                              {value.country}
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
              </Grid>
            ))}
          </Grid>
        ) : (
          "No Details Found"
        )}
      </Container>
    </div>
  );
};

export default ServiceGroom;
