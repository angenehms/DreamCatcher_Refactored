import styled from "styled-components";
import Container from '@mui/material/Container';

export const WrapperMuiContainer = styled(Container)`
    .ContentsMuiBox {
        margin-top: 2; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
    }

    h1 {
        font-size: 50px; 
        background: linear-gradient(to right bottom, #8d649d, rgb(150, 169, 235)); 
        color: transparent; 
        -webkit-background-clip: text; // 노란줄 왜 뜨는거죠? 없앨 수도 없네 .. eslint 코드도 안통합니다 ..!
    }

    .CreateFormMuiBox {
        width: 90%;
    }

    .UpdateDeleteFormMuiBox {
        height: 50vh; 
        width: 100%; 
        margin-top: 7%;
    } 
`