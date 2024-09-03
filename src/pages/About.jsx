import { Typography, Container, Box, Grid, Stack, useTheme } from '@mui/material'
import React from 'react'
import { usernewimage } from '../images/images'


const About = () => {
  const theme = useTheme()

  return (

    <div style={{ backgroundColor: theme?.palette?.mode === "light" ? "#F9FAFB" : "#111827" }}>

      <Container maxWidth="lg" >

        <div className='about-div-2' >

          <div className='custom-download-cv-web-2' style={{ backgroundColor: "#3178C6" }}>
            <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>About me</Typography>
          </div>
          <Box mt={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className='userimage-grid'>
                <img src={usernewimage} alt='userimage' className='usernewimage-about' />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant='h5' className='h5-variant'>Curious about me? Here you have it:</Typography>
                <Typography variant='body1' className='body1-variant' mt={2}>
                  I'm a passionate, self-proclaimed designer who specializes
                  in full stack development (React.js & Node.js).
                  I am very enthusiastic about bringing the technical and
                  visual aspects of digital products to life. User experience,
                  pixel perfect design, and writing clear, readable,
                  highly performant code matters to me.
                </Typography>

                <Typography variant='body1' className='body1-variant' mt={2}>
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer,
                  taking on new challenges and learning the latest technologies
                  along the way. Now, in my early thirties,
                  7 years after starting my web development journey,
                  I'm building cutting-edge web applications
                  using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </Typography>

                <Typography variant='body1' className='body1-variant' mt={2}>
                  I am very much a progressive thinker and enjoy working on products end to end,
                  from ideation all the way to development.
                </Typography>

                <Typography variant='body1' className='body1-variant' mt={2}>
                  When I'm not in full-on developer mode, you can find me hovering around
                  on twitter or on indie hacker, witnessing the journey of
                  early startups or enjoying some free time.
                  You can follow me on Twitter where I share tech-related bites
                  and build in public, or you can follow me on GitHub.
                </Typography>
                <Typography variant='body1' className='body1-variant' mt={2}>
                  Finally, some quick bits about me.
                </Typography>
                <Stack direction={"row"} gap={{ xs: 1, sm: 2 }} mb={3} >
                  <ul className='ul-font-about'>
                    <li className='li-font-about'>B.E. in ECE Engineering</li>
                    <li className='li-font-about'>Full time freelancer</li>
                  </ul>
                  <ul className='ul-font-about'>
                    <li className='li-font-about'>B.E. in ECE Engineering</li>
                    <li className='li-font-about'>Full time freelancer</li>
                  </ul>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </div>

      </Container>
    </div>

  )
}

export default About