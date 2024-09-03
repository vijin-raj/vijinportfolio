import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


const Footer = () => {
    const theme = useTheme()
    return (

        <Container maxWidth="lg">
            <div className='footer-div' >
                <Box className="box-footer-1" mb={2} >
                    <div className='custom-download-cv-web-6' style={{ backgroundColor: "#3178C6" }}>
                        <Typography variant='body1' className='body1-menu-variant' textAlign={"center"} color={"#FFFFFF"}>Get in touch</Typography>
                    </div>
                </Box>

                <Box mb={4}>

                    <Typography variant="subtitle2" className='subtitle2-variant'>
                        What’s next? Feel free to reach out to me if you're looking for a developer,
                    </Typography>
                    <Typography variant="subtitle2" className='subtitle2-variant'>
                        have a query, or simply want to connect.
                    </Typography>

                </Box>

                <Box className="box-footer-2" mb={1}>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <MailOutlineIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                        <a href="mailto:vijin1697@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h2" className='h2-variant'>
                                vijin1697@gmail.com
                            </Typography>
                        </a>
                        <ContentCopyIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </Stack>
                </Box>

                <Box className="box-footer-2" mb={3} >
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <LocalPhoneOutlinedIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                        <a href="tel:+918110963086" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h2" className='h2-variant'>8110963086</Typography>
                        </a>
                        <ContentCopyIcon width={7} height={10} sx={{ color: theme?.palette?.mode === "dark" && "#FFFFFF" }} />
                    </Stack>
                </Box>


            </div>
        </Container>

    )
}
export default Footer
