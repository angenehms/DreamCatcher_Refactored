import React from 'react';
import ErrorImg from '../../img/ErrorPageImg/ErrorPageImg.png';

const Error = () => {
  return (
    <div style={{marginTop:"220px", textAlign:"center"}}>
      <img src={ErrorImg} alt="404 Error" style={{width:"170px", height:"170px"}}/>
    </div>
  )
}

export default Error
