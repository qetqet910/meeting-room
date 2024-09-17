import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { db } from '../firbase';
import { collection, query, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { ResCalF } from './resCal';

const RoomUnit = styled.div`
    position: relative;
    min-width: 78rem;
    max-width: 78rem;
    height: 100vh;
    padding: 1rem 1rem 0 1rem;
    margin: 0 auto;
    overflow-y: scroll;
    background: #f5f4f4;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Cards = styled.div`
    position: relative;
    display: block;
    width: 100%;
    min-height: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 10px #dfe4ea;
    border-radius: 10px;
    overflow: hidden;
    transition: all .25s;
    z-index: 999;
    background: #f6f5f1;
    margin: 1rem 0;

    .top{
        position: relative;
        width: 100%;
        height: 34rem;
        overflow: hidden;
        img{
            position: absolute;
            width: 100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

        }

    }
    .bottom{
        display: grid;
        height: 0rem;
        padding: 10px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        .left{
            display: flex;
            align-items: center;
            .RoomTitle{
                color: #333;
                font-size: 2.6rem;
                font-weight: bold;
                font-family: 'Do Hyeon', sans-serif;
                letter-spacing: -2px;
                word-spacing: 2px;
                color: #1f386b;
            }
        }
        .right{
            display: flex;
            justify-content: right;
            align-items: center;
            .MaxPeople{
                color: #666;
                font-size: 2rem;
                font-weight: bold;
                letter-spacing: -2px;
                word-spacing: 2px;
                svg{
                    font-size: 1.8rem;
                    margin-bottom: .5px;
                    margin-left: 6px;
                    color: #1f386b;
                }
            }
        }
        .realbottom{
            grid-column: span 2;
            color: #666;
            font-size: 1.95rem;
            line-height: 1.8rem;
            font-family: 'Do Hyeon', sans-serif;
            margin-top: 1.6rem;
            font-weight: 600;
        }
    }
`   

export function Rroom(){
    const [ dateData, setDateData ] = useState([])
    const [ roomData, setRoomData ] = useState([])
    const param = useParams();
    const pa = Object.values(param)[0];

    async function getDate(){
        const q = query(collection(db, "roomRservation"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(Number(doc.id) == Number(pa)){
                setDateData(doc.data());
                // console.log(doc.data());
            }
        });
    }

    async function getRooms(){
        const query = await getDocs(collection(db, "rooms"));
        query.forEach((doc) => {
            if(Number(doc.data().id) == Number(pa)){
                setRoomData(doc.data());
            }
        });
    }
    
    useEffect(() => {
        getDate();
        getRooms();
    }, [])

    // console.log(roomData);

    return(
        <RoomUnit>
            <Cards>
                <div className='top'>
                    <img src={roomData.img} alt="Room1" />
                </div>
                <div className='bottom'>
                    <div className="left">
                    <h1 className='RoomTitle'>{roomData.name}</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : {roomData.user}<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>{roomData.description}</h4>
                    </div>
                </div>

                <ResCalF/>
            </Cards>
        </RoomUnit>
    )
}