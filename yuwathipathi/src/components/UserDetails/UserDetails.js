import React,{ useEffect } from 'react'
import { logout, setCredentials, setUserToken } from '../../features/auth/authSlice'
import { useGetUserDetailsQuery } from '../../app/services/auth/authService'
import { useDispatch, useSelector } from 'react-redux'

import {
    Box,
    Container,
    Typography,
    FormControl,
    Select,
    Card,
    Alert,
    TextField, Button,
    FormLabel,
    MenuItem, Grid,
} from '@mui/material'
// import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserDetails = () => {
    const { userInfo } = useSelector((state) => state.authApi)
    const dispatch = useDispatch()
    const { data, isFetching, refetch } = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 9000,
    });
    const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null
    useEffect(() => {
        if (data) {
            dispatch(setCredentials(data))
        }
        refetch()
        dispatch(setUserToken(userToken))
alert('userdetails')
    }, [data, dispatch, userToken])

    // const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const SESSION_CREATE_STEPS = ['Personal', 'Parents', 'Private', 'Review & Pay']


    const Buddhist = 'Buddhist';
    const Christian = 'Christian';
    const Islam = 'Islam';
    const Agnostic = 'Agnostic';
    const Catholic = 'Catholic';
    const None = 'None';
    const Other = 'Other';
    const Male = 'Male';
    const Female = 'Female';
    const Sinhalese = 'Sinhalese';
    const Muslim = 'Muslim';
    const Tamil = 'Tamil';
    const Burger = 'Burger';
    const Married = 'Married';
    const NeverMarried = 'Never-Married';
    const Colombo = 'Colombo';
    const Gampaha = 'Gampaha';
    const Kandy = 'Kandy';
    const Galle = 'Galle';
    const Matara = 'Matara';
    const Hambantota = 'Hambantota';
    const Jaffna = 'Jaffna';
    const Mannar = 'Mannar';
    const Vavuniya = 'Vavuniya';
    const Mullaitivu = 'Mullaitivu';
    const Kilinochchi = 'Kilinochchi';
    const Batticaloa = 'Batticaloa';
    const Ampara = 'Ampara';
    const Trincomalee = 'Trincomalee';
    const Kurunegala = 'Kurunegala';
    const Puttalam = 'Puttalam';
    const Anuradhapura = 'Anuradhapura';
    const Polonnaruwa = 'Polonnaruwa';
    const Badulla = 'Badulla';
    const Monaragala = 'Monaragala';
    const Ratnapura = 'Ratnapura';
    const Kegalle = 'Kegalle';
    const NuwaraEliya = 'Nuwara Eliya';
    const Matale = 'Matale';
    const Kalutara = 'Kalutara';
    const SriLanka = 'SriLanka';
    const India = 'India';

    const INIT_USER_DETAILS = {
        firstName: '',
        lastName: '',
        religion: '',
        gender: '',
        nation: '',
        marriage: '',
        height: '',
        city: '',
        country: '',
        district: '',
        profession: '',
        nationFa: '',
        religionFa: '',
        professionFa: '',
        countryFa: '',
        nationMo: '',
        religionMo: '',
        professionMo: '',
        birthday: '',
        birthCountry: '',
        birthCity: '',
        birthTime: '',
        phoneNumber: '',
        email: ''
    }
    const [formDetails, setFormDetails] = React.useState(INIT_USER_DETAILS);

    const handleForm = (event) => {
        const value = event.target.value;
        setFormDetails({
            ...formDetails,
            [event.target.name]: value
        });
    }
    console.log('values', formDetails.firstName);
    console.log('values2', formDetails.lastName);
    console.log('value3', formDetails.religion);
    console.log('value3', formDetails.gender);
    console.log('value3', formDetails.nation);
    console.log('value3', formDetails.marriage);
    console.log('value3', formDetails.height);
    console.log('value3', formDetails.city);
    console.log('value3', formDetails.country);
    console.log('value3', formDetails.district);

    console.log('value3', formDetails.nationFa);
    console.log('value3', formDetails.nationMo);
    console.log('value3', formDetails.countryFa);
    console.log('value3', formDetails.religionFa);
    console.log('value3', formDetails.religionMo);
    console.log('value3', formDetails.phoneNumber);
    console.log('value3', formDetails.professionMo);
    console.log('value3', formDetails.professionFa);
    console.log('value3', formDetails.profession);
    console.log('value3', formDetails.birthday);
    console.log('value3', formDetails.birthCountry);
    console.log('value3', formDetails.birthCity);

    console.log('value3', formDetails.phoneNumber);
    console.log('value3', formDetails.email);



    return (
        <React.Fragment>
            <Container sx={{ maxWidth: 500, maxHeight: 800, mt: 4, pt: 4 }}>
                <form action="/action_page.php" method="get" id="formDetails">
                    <Box>
                        <Card sx={{ m: 4 }}>
                            <Typography
                                sx={{ pt: 4, pl: 4, fontWeight: 600, fontSize: '20px' }}>
                                Basic
                            </Typography>
                            <Alert severity="info" sx={{ m: '1rem', maxHeight: '5%', width: '80%', ml: 4 }}>
                                Please fill these details, This will helpful yourself and others to find the best matching partner                                    </Alert>
                            <FormControl sx={{ pl: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormLabel>First Name</FormLabel>
                                        <TextField
                                            name="firstName"
                                            value={formDetails.firstName}
                                            required
                                            id="outlined-required"
                                            placeholder='First Name'
                                            sx={{ p: 2, width: '50%', textAlign: 'left' }}
                                            onChange={handleForm}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1.5 }} >Last Name</FormLabel>
                                        <TextField
                                            name="lastName"
                                            value={formDetails.lastName}
                                            required
                                            id="outlined-required"
                                            placeholder='Last Name'
                                            sx={{ p: 1.6, width: '50%', textAlign: 'left' }}
                                            onChange={handleForm}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Religion</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="religion"
                                            value={formDetails.religion}
                                            onChange={handleForm}
                                            sx={{ ml: 4.5, mb: 2, width: '50%', textAlign: 'left' }}

                                        >
                                            <MenuItem value={Buddhist}>Buddhist</MenuItem>
                                            <MenuItem value={Christian}>Christian</MenuItem>
                                            <MenuItem value={Islam}>Islam</MenuItem>
                                            <MenuItem value={Agnostic}>Agnostic</MenuItem>
                                            <MenuItem value={Catholic}>Catholic</MenuItem>
                                            <MenuItem value={None}>None</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1.5 }}>Gender</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="gender"
                                            value={formDetails.gender}
                                            onChange={handleForm}
                                            sx={{ ml: 4.5, mb: 2, width: '50%', textAlign: 'left' }}
                                        >
                                            <MenuItem value={Male}>Male</MenuItem>
                                            <MenuItem value={Female}>Female</MenuItem>
                                            <MenuItem value={Other}>other</MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Ethnics</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="nation"
                                            value={formDetails.nation}
                                            placeholder='religion'
                                            onChange={handleForm}
                                            sx={{ ml: 5.2, mb: 2, pl: 2, width: '50%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={Sinhalese}>Sinhalese</MenuItem>
                                            <MenuItem value={Tamil}>Tamil</MenuItem>
                                            <MenuItem value={Muslim}>Muslim</MenuItem>
                                            <MenuItem value={Burger}>Burger</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>



                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1.5 }}  >Civil State</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="marriage"
                                            value={formDetails.marriage}
                                            onChange={handleForm}

                                            sx={{ ml: 2.1, mb: 2, width: '50%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={Married}>Married</MenuItem>
                                            <MenuItem value={NeverMarried}>Never Married</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>

                                        <FormLabel>Height</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="height"
                                            value={formDetails.height}
                                            onChange={handleForm}

                                            sx={{ ml: 5.9, mb: 2, width: '50%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={4}>4 feet</MenuItem>
                                            <MenuItem value={4.1}>4 feet 1 inch</MenuItem>
                                            <MenuItem value={4.2}>4 feet 2 inches</MenuItem>
                                            <MenuItem value={4.3}>4 feet 3 inches</MenuItem>
                                            <MenuItem value={4.4}>4 feet 4 inches</MenuItem>
                                            <MenuItem value={4.5}>4 feet 5 inches</MenuItem>
                                            <MenuItem value={4.6}>4 feet 6 inches</MenuItem>
                                            <MenuItem value={4.7}>4 feet 7 inches</MenuItem>
                                            <MenuItem value={4.8}>4 feet 8 inches</MenuItem>
                                            <MenuItem value={4.9}>4 feet 9 inches</MenuItem>
                                            <MenuItem value={5}>5 feet</MenuItem>
                                            <MenuItem value={5.1}>5 feet 1 inch</MenuItem>
                                            <MenuItem value={5.2}>5 feet 2 inches</MenuItem>
                                            <MenuItem value={5.3}>5 feet 3 inches</MenuItem>
                                            <MenuItem value={5.4}>5 feet 4 inches</MenuItem>
                                            <MenuItem value={5.5}>5 feet 5 inches</MenuItem>
                                            <MenuItem value={5.6}>5 feet 6 inches</MenuItem>
                                            <MenuItem value={5.7}>5 feet 7 inches</MenuItem>
                                            <MenuItem value={5.8}>5 feet 8 inches</MenuItem>
                                            <MenuItem value={5.9}>5 feet 9 inches</MenuItem>
                                            <MenuItem value={6}>6 feet</MenuItem>
                                            <MenuItem value={6.1}>6 feet 1 inch</MenuItem>
                                            <MenuItem value={6.2}>6 feet 2 inches</MenuItem>
                                            <MenuItem value={6.3}>6 feet 3 inches</MenuItem>
                                            <MenuItem value={6.4}>6 feet 4 inches</MenuItem>
                                            <MenuItem value={6.5}>6 feet 5 inches</MenuItem>
                                            <MenuItem value={6.6}>6 feet 6 inches</MenuItem>
                                            <MenuItem value={6.7}>6 feet 7 inches</MenuItem>
                                            <MenuItem value={6.8}>6 feet 8 inches</MenuItem>
                                            <MenuItem value={6.9}>6 feet 9 inches</MenuItem>
                                            <MenuItem value={7}>7 feet</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1.5 }} >Profession</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Profession'
                                            name="profession"
                                            value={formDetails.profession}
                                            onChange={handleForm}

                                            sx={{ p: 1.6, width: '50%', textAlign: 'left' }}

                                        />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{ m: 4 }}>
                            <Typography
                                sx={{ p: 4, fontWeight: 600, fontSize: '20px' }}>
                                Residency
                            </Typography>
                            <FormControl sx={{ pl: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormLabel>City</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='City'
                                            name="city"
                                            value={formDetails.city}
                                            onChange={handleForm}
                                            sx={{ ml: 8, mb: 2, width: '58%', textAlign: 'left' }}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1 }} >Country of Residency</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="country"
                                            value={formDetails.country}
                                            onChange={handleForm}

                                            sx={{ ml: 0.6, mb: 2, width: '57%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={SriLanka}>Sri Lanka</MenuItem>
                                            <MenuItem value={India}>India</MenuItem>
                                            <MenuItem value={Other}>other</MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>State/ District</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="district"
                                            value={formDetails.district}
                                            onChange={handleForm}

                                            sx={{ ml: 3.7, mb: 2, width: '230px' }}

                                        >
                                            <MenuItem value={"Colombo"}>Colombo</MenuItem>
                                            <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                                            <MenuItem value={"Kandy"}>Kandy</MenuItem>
                                            <MenuItem value={"Galle"}>Galle</MenuItem>
                                            <MenuItem value={"Matara"}>Matara</MenuItem>
                                            <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                                            <MenuItem value={"Jaffna"}>Jaffna</MenuItem>
                                            <MenuItem value={"Mannar"}>Mannar</MenuItem>
                                            <MenuItem value={"Vavuniya"}>Vavuniya</MenuItem>
                                            <MenuItem value={"Mullaitivu"}>Mullaitivu</MenuItem>
                                            <MenuItem value={"Kilinochchi"}>Kilinochchi</MenuItem>
                                            <MenuItem value={"Batticaloa"}>Batticaloa</MenuItem>
                                            <MenuItem value={"Ampara"}>Ampara</MenuItem>
                                            <MenuItem value={"Trincomalee"}>Trincomalee</MenuItem>
                                            <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
                                            <MenuItem value={"Puttalam"}>Puttalam</MenuItem>
                                            <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
                                            <MenuItem value={"Polonnaruwa"}>Polonnaruwa</MenuItem>
                                            <MenuItem value={"Badulla"}>Badulla</MenuItem>
                                            <MenuItem value={"Monaragala"}>Monaragala</MenuItem>
                                            <MenuItem value={"Ratnapura"}>Ratnapura</MenuItem>
                                            <MenuItem value={"Kegalle"}>Kegalle</MenuItem>
                                            <MenuItem value={"Nuwara Eliya"}>Nuwara Eliya</MenuItem>
                                            <MenuItem value={"Matale"}>Matale</MenuItem>
                                            <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                                            <MenuItem value={"Kalutara"}>Kalutara</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>





                                        </Select>
                                    </Grid>
                                </Grid>
                            </FormControl>

                        </Card>
                        <Card sx={{ m: 4 }}>
                            <Typography
                                sx={{ p: 4, fontWeight: 600, fontSize: '20px' }}>
                                Parents Details(Father)
                            </Typography>
                            <FormControl sx={{ pl: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormLabel>Ethnics</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="nationFa"
                                            value={formDetails.nationFa}
                                            onChange={handleForm}

                                            sx={{ ml: 5, mb: 2, pl: 2, width: '50%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={Sinhalese}>Sinhalese</MenuItem>
                                            <MenuItem value={Tamil}>Tamil</MenuItem>
                                            <MenuItem value={Muslim}>Muslim</MenuItem>
                                            <MenuItem value={Burger}>Burger</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>



                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Caste</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Caste'
                                            name="casteFa"
                                            value={formDetails.casteFa}
                                            onChange={handleForm}

                                            sx={{ ml: 8, mb: 2, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Religion</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="religionFa"
                                            value={formDetails.religionFa}
                                            onChange={handleForm}

                                            sx={{ ml: 4.3, mb: 2, width: '50%', textAlign: 'left' }}

                                        >
                                            <MenuItem value={Buddhist}>Buddhist</MenuItem>
                                            <MenuItem value={Christian}>Christian</MenuItem>
                                            <MenuItem value={Islam}>Islam</MenuItem>
                                            <MenuItem value={Agnostic}>Agnostic</MenuItem>
                                            <MenuItem value={Catholic}>Catholic</MenuItem>
                                            <MenuItem value={None}>None</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Profession</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Profession'
                                            name="professionFa"
                                            value={formDetails.professionFa}
                                            onChange={handleForm}

                                            sx={{ ml: 3.6, mb: 2, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Country of Residency</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="countryFa"
                                            value={formDetails.countryFa}
                                            onChange={handleForm}

                                            sx={{ ml: 0.5, mb: 2, width: '37%', textAlign: 'left' }}
                                        >
                                            <MenuItem value={SriLanka}>Sri Lanka</MenuItem>
                                            <MenuItem value={India}>India</MenuItem>
                                            <MenuItem value={Other}>other</MenuItem>


                                        </Select>
                                    </Grid>
                                </Grid>
                            </FormControl>

                        </Card>
                        <Card sx={{ m: 4 }}>
                            <Typography
                                sx={{ p: 4, fontWeight: 600, fontSize: '20px' }}>
                                Parents Details(Mother)
                            </Typography>
                            <FormControl sx={{ pl: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormLabel>Ethnics</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="nationMo"
                                            value={formDetails.nationMo}
                                            onChange={handleForm}

                                            sx={{ ml: 5, mb: 2, pl: 2, width: '50%', textAlign: 'left' }}


                                        >
                                            <MenuItem value={Sinhalese}>Sinhalese</MenuItem>
                                            <MenuItem value={Tamil}>Tamil</MenuItem>
                                            <MenuItem value={Muslim}>Muslim</MenuItem>
                                            <MenuItem value={Burger}>Burger</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>



                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 2 }}>Caste</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Caste'
                                            name="casteMo"
                                            value={formDetails.casteMo}
                                            onChange={handleForm}

                                            sx={{ ml: 7, mb: 2, width: '50%' }}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Religion</FormLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="religionMo"
                                            value={formDetails.religionMo}
                                            onChange={handleForm}

                                            sx={{ ml: 4.5, mb: 2, width: '50%', textAlign: 'left' }}

                                        >
                                            <MenuItem value={Buddhist}>Buddhist</MenuItem>
                                            <MenuItem value={Christian}>Christian</MenuItem>
                                            <MenuItem value={Islam}>Islam</MenuItem>
                                            <MenuItem value={Agnostic}>Agnostic</MenuItem>
                                            <MenuItem value={Catholic}>Catholic</MenuItem>
                                            <MenuItem value={None}>None</MenuItem>
                                            <MenuItem value={Other}>Other</MenuItem>


                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel sx={{ ml: 1 }}>Profession</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Profession'
                                            name="professionMo"
                                            value={formDetails.professionMo}
                                            onChange={handleForm}

                                            sx={{ ml: 3.6, mb: 2, width: '50%', textAlign: 'left' }}

                                        />
                                    </Grid>
                                </Grid>
                            </FormControl>

                        </Card>
                        <Card sx={{ m: 4 }}>
                            <Typography
                                sx={{ p: 4, fontWeight: 600, fontSize: '20px' }}>
                                Horoscope Details
                            </Typography>
                            <Alert severity="info" sx={{ marginBottom: '3rem', maxHeight: '5%', width: '90%', ml: 3 }}>
                                Your Horoscope details may be accessible to your matches(i.e Both parties should show interest towards each other)
                            </Alert>
                            <FormControl sx={{ pl: 2 }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <FormLabel>Birthday</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Birthday'
                                            name="birthday"
                                            value={formDetails.birthday}
                                            onChange={handleForm}

                                            sx={{ ml: 5, mb: 2, width: '50%', textAlign: 'left' }}

                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Birth Country</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Birth Country'
                                            name="birthCountry"
                                            value={formDetails.birthCountry}
                                            onChange={handleForm}

                                            sx={{ ml: 2, mb: 2, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Birth City</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            placeholder='Birth City'
                                            name="birthCity"
                                            value={formDetails.birthCity}
                                            onChange={handleForm}

                                            sx={{ ml: 4.2, mb: 2, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel>Birth Time</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            name="birthTime"
                                            value={formDetails.birthTime}
                                            placeholder='Birth Time'
                                            onChange={handleForm}

                                            sx={{ ml: 4.7, mb: 2, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                    <Alert severity="info" sx={{ m: '2rem', maxHeight: '5%', width: '89%', ml: 4 }}>
                                        Your phone number will be not be visible publicly. You can choose to share your number when you match
                                    </Alert>
                                    <Grid item xs={6}>
                                        <FormLabel>Phone Number</FormLabel>
                                        <TextField
                                            required
                                            type="tel"
                                            id="outlined-required"
                                            placeholder='+94 7X XXX XXXX'
                                            pattern="(\+94|0)[1-9]\d{8}"
                                            name="phoneNumber"
                                            value={formDetails.phoneNumber}
                                            onChange={handleForm}

                                            sx={{ ml: 2, mb: 2, width: '45%', textAlign: 'left' }}
                                        />
                                    </Grid>

                                    <Grid item xs={6} sx={{ mb: 3 }}>
                                        <FormLabel>Email</FormLabel>
                                        <TextField
                                            required
                                            type="email"
                                            id="outlined-required"
                                            placeholder='Email'
                                            name="email"
                                            value={formDetails.email}
                                            onChange={handleForm}

                                            sx={{ ml: 8.8, mb: 5, width: '50%', textAlign: 'left' }}
                                        />
                                    </Grid>
                                </Grid >
                                <Button type="submit" form="formDetails" value="submit" variant="contained" sx={{ m: 4, maxWidth: '20%', justifyContent: 'center', marginLeft: 'auto' }}>Submit and Save</Button>
                            </FormControl>

                        </Card>


                    </Box>

                </form>

            </Container>
        </React.Fragment >
    )
}

export default UserDetails