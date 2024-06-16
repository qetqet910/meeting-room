// import React from 'react';
import styled from 'styled-components';
import LoginSection from 'style/Components/Link_/LoginSection';

// Styled-Components

const Pages = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-rows: 1fr;
    width: 100vw;
    height: 100vh;
    @media screen and (max-width: 1280px){
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 2fr);   
    }
`

function Login() {
  return (
    <Pages>
      <LoginSection />
    </Pages>
  );
}

export default Login;