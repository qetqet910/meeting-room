import styled from 'styled-components';
import Tolls3Btns from 'style/Components/Tool/Tools3Btns';
import { RoomHeader } from 'style/Components/Link_main/RoomHeader';
import { RoomPartition } from 'style/Components/Link_main/RoomPartition';
import { RoomMenus } from 'style/Components/Link_main/RoomMenu';

// import Logo from 'img/Login/logo_transparent.png'
// import { auth } from 'firebaseConfig'
// import { Link } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
    
const HomeGrid = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    
`

function HomeSection(){

    return(
        <HomeGrid>
            <Tolls3Btns /> 
            <RoomMenus></RoomMenus>
            <RoomHeader></RoomHeader>
            <RoomPartition></RoomPartition>
        </HomeGrid>       
    )
}

export default HomeSection;