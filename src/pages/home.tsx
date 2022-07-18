// import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Tolls3Btns from 'style/Components/Tool/Tools3Btns';
import { RoomPartition } from 'style/Components/Link_main/RoomPartition';

// import Logo from 'img/Login/logo_transparent.png'
// import { auth } from 'firebaseConfig'
// import { Link } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';

const HomeGrid = styled.section`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 10% 90%;
    padding: 20px;
`

function HomeSection(){

    return(
        <HomeGrid>
            <Tolls3Btns /> 
            <div></div>
            <div></div>
            <div></div>
            <RoomPartition></RoomPartition>
        </HomeGrid>       
    )
}

export default HomeSection;