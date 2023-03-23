import styled from "styled-components";
import { ImgArrayForRandom } from '../../component/ImgArrayForRandom/ImgArrayForRandom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const imgRandomNumber = Math.floor(Math.random() * ImgArrayForRandom.length);
const randomBackgroundImg = ImgArrayForRandom[imgRandomNumber]

export const WrapperMuiGrid = styled(Grid)`
    height: 100vh;
`

export const RandomImgMuiGrid = styled(Grid)`
    &.randomImgMuiGrid {
    background-image: url(${randomBackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
`

export const SigninFormMuiBox = styled(Box)`
    margin-top: 30%;
    display: flex;
    flex-direction: column; 
    align-items: center;
`