
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/55% repeat-x #000;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 60px;
    color: #FF0000;
    line-height: 1;
    background: #FFFFFF;
    padding: 5px;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    margin-top: 10px;
    padding: 5px;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>TravelDiaries</Heading>
            <SubHeading>Share your travel experiences!</SubHeading>
        </Image>
    )
}

export default Banner;