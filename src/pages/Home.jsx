import { Grid, Stack, Typography, Container, Box, useTheme } from '@mui/material'
import React from 'react'
import { avatarCircle, handyhifi, online } from '../images/images'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Toolbarstyle } from '../theme/helpertheme';

const Home = () => {
  const theme = useTheme()
  return (
    <Box component={"main"} >
      <Toolbarstyle />
    <Container maxWidth="lg" sx={{marginTop: {xs: 8 ,sm: 10 , md:10}, marginBottom: {xs: 1 ,sm: 2 , md:3}} } >
      <div className='home-div-home' >

        <Grid container spacing={2} sx={{
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
        }}>

          <Grid item xs={12} md={9} pl={2}>
              <Typography variant='h1' mt={{ xs: 2, md: 0 }} className='h1-font-smallscreen'>Hi, I'm Vijin Raj
              <img src={handyhifi} alt='wave'  className='wave-imageone' />
              </Typography>

            <div className='home-div-content'>
              <Box>
                <Typography variant='h6' mt={2} textAlign={{ xs: "flex-start", md: "unset" }} pl={0.5}>
                  I'm a Frond End developer (React.js & Node.js) with a focus on creating
                  (and occasionally designing) exceptional digital experiences that are fast,
                  accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
                </Typography>
              </Box>
            </div>
            <div className='div-home-location'>
              <Stack direction={"row"} gap={1} alignItems={"center"} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}  >
                <FmdGoodOutlinedIcon width={7} height={10} sx={{color: theme?.palette?.mode  === "dark" && "#FFFFFF" }} />
                <Typography variant='h6'  >
                  Tharkuripatti
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={2} alignItems={"center"} mt={1} ml={1} sx={{ display: { xs: "flex", md: "flex" }, justifyContent: { xs: "flex-start", md: "unset" } }}>
                <img src={online} alt="online" width={10} height={10} />
                <Typography variant='h6'  >
                  Available for new projects
                </Typography>
              </Stack>
            </div>

          </Grid>
          <Grid item xs={12} md={3} display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}>
            <img src={avatarCircle} alt='avatarcircle' className='avatarcircle-img' />
          </Grid>

        </Grid>

      </div>
     
    </Container>
    </Box>
  )
}

export default Home