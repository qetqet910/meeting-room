// import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageNotFoundLOTTIE from '../lottie/PageNotFoundLOTTIE';

// Styled-Components

const Pages = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: #eeeeee;
    div{
        width: 50vw;
    }
    a{
        font-size: 1.6vw;
        font-weight: bold;
        color: #333;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`

function PageNotFound() {
  return (
    <Pages>
        <PageNotFoundLOTTIE></PageNotFoundLOTTIE>
        <Link to="/">메인으로</Link>
    </Pages>
  );
}

export default PageNotFound;