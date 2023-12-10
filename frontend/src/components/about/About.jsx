
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/31-313920_starting-an-adventure-travel-company-adventure-travel.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: fit;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Text = styled(Typography)`
    color: #878787;
    margin-top: 30px;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h2">TravelDiaries</Typography>
                <Text variant="h4"> 
                    This is the place where you can share and document your travels.
                    Go ahead and share your experiences on the places you visited and the cities you liked. 
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;