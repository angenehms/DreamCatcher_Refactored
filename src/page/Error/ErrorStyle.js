import styled from "styled-components";
import ErrorImg from "../../img/ErrorPageImg/ErrorPageImg.png";

export const WrapperDiv = styled.div({
  marginTop: "220px",
  textAlign: "center",
});

export const PageImg = styled.img.attrs({
  src: `${ErrorImg}`,
  alt: "404 Error",
})({
  width: "170px",
  height: "170px",
});
