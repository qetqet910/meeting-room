import styled from 'styled-components';
import Tolls3Btns from 'style/Components/Tool/Tools3Btns';
import { RoomHeader } from 'style/Components/Link_main/RoomHeader';
import { RoomPartition } from 'style/Components/Link_main/RoomPartition';
import { RoomMenus } from 'style/Components/Link_main/RoomMenu';
import { Particle50 } from '../service/particle/particle';

// import Logo from 'img/Login/logo_transparent.png'
// import { auth } from 'firebaseConfig'
// import { Link } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
    
const HomeGrid = styled.section`
    position: absolute;
    width: 780px;
    height: 100vh;
    left: 50%;
    top: 0px;
    transform: translateX(-50%);
`

function HomeSection(){

    return(
        <>
            {/* <Particle50 /> */}
            <HomeGrid>
                <Tolls3Btns /> 
                {/* <RoomMenus></RoomMenus> */}
                <RoomHeader></RoomHeader>
                <RoomPartition></RoomPartition>
            </HomeGrid>    
        </>
    )
}

export default HomeSection;