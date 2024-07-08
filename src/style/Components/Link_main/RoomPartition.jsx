import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { db } from '../../../firbase';
import { getDocs, collection } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const RoomUnit = styled.div`
    position: relative;
    display: grid;
    height: 100%;
    padding: 8rem 1rem 0 1rem;
    margin: 0 auto;
    grid-template-columns: repeat(2, 36.5rem);
    grid-template-rows: repeat(5, 37rem);
    gap: 2rem 2rem;
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

    // Media
    // @Step: 160px @Value: 45px
    // @Param: Cards

    /* @media screen and (max-width: 1760px) {
        grid-template-columns: repeat(4, 325px);
        grid-template-rows: repeat(3, 325px);
        a{
            width: 325px;
            min-height: 325px;
        }
    }
    @media screen and (max-width: 1600px) {
        grid-template-columns: repeat(4, 290px);
        grid-template-rows: repeat(3, 290px);   
        a{
            width: 290px;
            min-height: 290px;  
        }
    }
    @media screen and (max-width: 1440px){
        grid-template-columns: repeat(4, 260px);
        grid-template-rows: repeat(3, 260px);   
        a{
            width: 260px;
            min-height: 260px;  
        }
    }
    @media screen and (max-width: 1280px){
        // -- 10
        grid-template-columns: repeat(3, 310px);
        grid-template-rows: repeat(3, 310px);   
        a{
            width: 310px;
            min-height: 310px;  
        }
    }
    @media screen and (max-width: 1120px){
        // -- 5
        grid-template-columns: repeat(3, 240px);
        grid-template-rows: repeat(3, 240px);   
        a{
            width: 240px;
            min-height: 240px;  
        }
    }
    @media screen and (max-width: 960px){
        grid-template-columns: repeat(2, 330px);
        grid-template-rows: repeat(2, 330px);   
        a{
            width: 330px;
            min-height: 330px;  
        }
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 290px);
        grid-template-rows: repeat(2, 290px);   
        a{
            width: 290px;
            min-height: 290px;  
        }
    }
    @media screen and (max-width: 750px){
        grid-template-columns: repeat(2, 270px);
        grid-template-rows: repeat(2, 270px);   
        a{
            width: 270px;
            min-height: 270px;  
        }
    }
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(2, 240px);
        grid-template-rows: repeat(2, 240px);   
        a{
            width: 240px;
            min-height: 240px;  
        }
    }
    @media screen and (max-width: 620px){
        grid-template-columns: repeat(2, 210px);
        grid-template-rows: repeat(2, 210px);   
        a{
            width: 210px;
            min-height: 210px;  
        }
    }
    @media screen and (max-width: 520px){
        grid-template-columns: repeat(1, 380px);
        grid-template-rows: repeat(1, 380px);   
        a{
            width: 380px;
            min-height: 380px;  
        }
    }
    @media screen and (max-width: 380px){
        grid-template-columns: repeat(1, 310px);
        grid-template-rows: repeat(3, 310px);   
        a{
            width: 310px;
            min-height: 310px;  
        }
    }
    @media screen and (max-width: 280px){
        grid-template-columns: repeat(1, 240px);
        grid-template-rows: repeat(3, 240px);   
        a{
            width: 240px;
            min-height: 240px;  
        }
    } */
`
const Cards = styled.a`
    position: relative;
    display: block;
    width: 100%;
    min-height: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 10px #dfe4ea;
    border-radius: 10px;
    overflow: hidden;
    transition: all .25s;
    text-decoration: none;
    z-index: 999;
    background: #f6f5f1;

    /* a{text-decoration: none;} */
    &:hover{
        box-shadow: 0px 0px 10px #2f3542;
    }
    .top{
        position: relative;
        width: 100%;
        height: 70%;
        overflow: hidden;
        img{
            position: absolute;
            width: 120%;
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
                font-size: 2.2rem;
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
                font-size: 1.6rem;
                font-weight: bold;
                letter-spacing: -2px;
                word-spacing: 2px;
                svg{
                    font-size: 1.4rem;
                    margin-bottom: .5px;
                    margin-left: 6px;
                    color: #1f386b;
                }
            }
        }
        .realbottom{
            grid-column: span 2;
            color: #666;
            font-size: 1.55rem;
            line-height: 1.8rem;
            font-family: 'Do Hyeon', sans-serif;
            margin-top: 1.6rem;
            font-weight: 600;
        }
    }
`   

export function RoomPartition(){
    const [ roomData, setRoomData ] = useState([])

    async function getRooms(){
        const query = await getDocs(collection(db, "rooms"));
        query.forEach((doc) => {
            // const obj = {
            //     id: doc.id
            // }
            // Object.assign(obj, doc.data());
            setRoomData(prevList => [...prevList, doc.data()])
        });
    }
    
    useEffect(() => {
        getRooms();
    }, [])

    return(
        <RoomUnit>
            {
                roomData.map((room) => (
                    <Cards href={"rooms/room/" + room.id}>
                        <div className='top'>
                            <img src={room.img} alt="Room1" />
                        </div>
                        <div className='bottom'>
                            <div className="left">
                            <h1 className='RoomTitle'>{room.name}</h1>
                            </div>
                            <div className="right">
                                <span className='MaxPeople'>수용인원 : {room.user}<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                            </div>
                            <div className='realbottom'>
                                <h4 className='RoomDes'>{room.description}</h4>
                            </div>
                        </div>
                    </Cards>  
                ))
            }  
        </RoomUnit>
    )
}


/*
    useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state
이거 해결하기
*/