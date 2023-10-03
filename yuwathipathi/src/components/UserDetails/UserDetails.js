import React from 'react'
import {
    Box,
    Container,
    Typography,
    FormControl,
    Select,
    Card,
    Item,
    TextField,
    FormLabel,
    MenuItem, Grid,
} from '@mui/material'
// import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserDetails = () => {
    // const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [religion, setReligion] = React.useState();
    const handleChange = (event) => {
        setReligion(event.target.value);
    };
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
    const Married = 'Married'
    const NeverMarried = 'Never-Married'





    return (
        <React.Fragment>
            <Container sx={{ backgroundColor: 'white', maxWidth: 500, maxHeight: 800, mt: 4 }}>
                <Box>
                    <Card>
                        <Typography
                            sx={{ p: 4 }}>
                            Basic
                        </Typography>
                        <FormControl sx={{ pl: 2 }}>



                            <FormLabel>Gender</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={religion}
                                onChange={handleChange}
                                sx={{ ml: 2 }}
                            >
                                <MenuItem value={Male}>Male</MenuItem>
                                <MenuItem value={Female}>Female</MenuItem>
                                <MenuItem value={Other}>other</MenuItem>


                            </Select>
                            <FormLabel>Ethnics</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={religion}
                                onChange={handleChange}
                                sx={{ ml: 2 }}
                            >
                                <MenuItem value={Sinhalese}>Sinhalese</MenuItem>
                                <MenuItem value={Tamil}>Tamil</MenuItem>
                                <MenuItem value={Muslim}>Muslim</MenuItem>
                                <MenuItem value={Burger}>Burger</MenuItem>
                                <MenuItem value={Other}>Other</MenuItem>



                            </Select>
                            <FormLabel>Civil State</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={religion}
                                onChange={handleChange}
                                sx={{ ml: 2 }}
                            >
                                <MenuItem value={Married}>Married</MenuItem>
                                <MenuItem value={NeverMarried}>Never Married</MenuItem>
                            </Select>
                            <FormLabel>Height</FormLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={religion}
                                onChange={handleChange}
                                sx={{ ml: 2 }}
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
                        </FormControl>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <FormLabel>First Name</FormLabel>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        placeholder='First Name'
                                        sx={{ p: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormLabel>Last Name</FormLabel>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        placeholder='Last Name'
                                        sx={{ p: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormLabel>Religion</FormLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        value={religion}
                                        onChange={handleChange}
                                        sx={{ ml: 2 }}
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
                                </Grid>
                            </Grid>
                        </Box>

                    </Card>

                </Box>
            </Container>
        </React.Fragment >
    )
}

export default UserDetails