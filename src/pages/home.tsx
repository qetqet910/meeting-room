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
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: 6% 94%;
    @media screen and (max-width: 560px){
        grid-template-columns: 100%;
        grid-template-rows: 8% 92%;
        .Menu{
            display: none;
        }
    }
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