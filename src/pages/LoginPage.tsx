// import React from 'react';
import styled from 'styled-components';
import LoginSection from 'style/Components/Link_/LoginSection';

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
      <LoginSection />
    </Pages>
  );
}

export default Login;