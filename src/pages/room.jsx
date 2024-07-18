import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { db } from '../firbase';
import { getDocs, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const RoomUnit = styled.div`
    position: relative;
    height: 100vh;
    padding: 1rem 1rem 0 1rem;
    margin: 0 auto;
    overflow-y: scroll;
    background: #f5f4f4;

    &::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }
    &::-webkit-scrollbar{
        width: 5px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #272727;
        border-radius: 10px;
    }

   
`

export function Rroom(){
    const [ roomData, setRoomData ] = useState([])
    const param = useParams();

    async function getRooms(){
        const query = await getDoc(doc(db, "roomRservation", param));
        query.forEach((doc) => {
            setRoomData(prevList => [...prevList, doc.data()])
        });
    }
    
    useEffect(() => {
        getRooms();
    }, [])

    console.log(roomData);

    return(
        <RoomUnit></RoomUnit>
    )
}