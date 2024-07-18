// import React from 'react';
import styled from 'styled-components';
import { Rroom } from './room';

// Styled-Components

const Pages = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`

function Login() {
  
  return (
    <Pages>
        <Rroom></Rroom>
    </Pages>
  );
}

export default Login;