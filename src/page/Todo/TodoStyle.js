import styled from "styled-components";
import Box from "@mui/material/Box";

export const TitleH1 = styled.h1`
  font-size: 55px;
  background: linear-gradient(to right bottom, #8d649d, rgb(150, 169, 235));
  color: transparent;
  -webkit-background-clip: text; // 노란줄 왜 뜨는거죠? 없앨 수도 없네 .. eslint 코드도 안통합니다 ..!
`;

export const ContentsMuiBox = styled(Box)`
  &.ContentsMuiBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CreateFormMuiBox = styled(Box)`
  &.CreateFormMuiBox {
    width: 90%;
  }
`;

export const UpdateDeleteFormMuiBox = styled(Box)`
  &.UpdateDeleteFormMuiBox {
    height: 50vh;
    width: 100%;
    margin-top: 7%;
  }
`;
