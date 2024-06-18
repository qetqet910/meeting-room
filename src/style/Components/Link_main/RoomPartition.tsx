import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Room1 from 'img/Main/Rooms/room1.jpg';
import Room2 from 'img/Main/Rooms/room2.jpg';
import Room3 from 'img/Main/Rooms/room3.jpg';
import Room4 from 'img/Main/Rooms/room4.jpg';
import Room5 from 'img/Main/Rooms/room5.jpg';
import Room6 from 'img/Main/Rooms/room6.jpg';
import Room7 from 'img/Main/Rooms/room7.jpg';
import Room8 from 'img/Main/Rooms/room8.jpg';
import Room9 from 'img/Main/Rooms/room9.jpg';
import Room10 from 'img/Main/Rooms/room10.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const RoomUnit = styled.div`
    position: relative;
    display: grid;
    height: 100%;
    padding: 3rem 0px 0rem 3rem;
    grid-template-columns: repeat(4, 370px);
    grid-template-rows: repeat(3, 370px);
    gap: 30px 20px;
    overflow-y: scroll;
    z-index: 1;
    background-color: #fff;

    &::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }
    &::-webkit-scrollbar{
        width: 10px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #AAA;
        border-radius: 10px;
        background-image: -webkit-linear-gradient(90deg,
                                                #2f3542 25%,
                                                #394358 25%,
                                                #394358 50%,
                                                #2f3542 50%,
                                                #2f3542 75%,
                                                #394358 75%,
                                                #394358)
    }

    // Media
    // @Step: 160px @Value: 45px
    // @Param: Cards

    @media screen and (max-width: 1760px) {
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
    }
`
const Cards = styled.a`
    position: relative;
    display: block;
    width: 370px;
    min-height: 370px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px #dfe4ea;
    border-radius: 10px;
    overflow: hidden;
    transition: all .25s;
    text-decoration: none;
    z-index: 999;
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
    // 백엔드 연동 후 코드 수정
    return(
        <RoomUnit>
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room1} alt="Room1" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>메인 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 30<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 1층 복도쪽에 있는 메인 회의실로 수용 인원이 제일 많다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R2">
                <div className='top'>
                    <img src={Room2} alt="Room2" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>대 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 20<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 1층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R3">
                <div className='top'>
                    <img src={Room3} alt="Room3" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>소 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 10<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 2층 복도쪽에 있는 회의실로 대형 스크린이 있는 게 특징이다</h4>
                    </div>
                </div>
            </Cards>       
            <Cards href="Rooms/R4">
                <div className='top'>
                    <img src={Room4} alt="Room4" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>1번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 6<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 있는 회의실로 적은 규모의 사람들이 모여 간단한 회의를 하기 좋은 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R1">         
                <div className='top'>
                    <img src={Room5} alt="Room5" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>2번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 6<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 1번 회의실 옆에 있는 회의실로 특징은 1번과 같다</h4>
                    </div>
                </div>
            </Cards>       
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room6} alt="Room6" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>3번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 10<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room7} alt="Room7" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>4번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 10<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room8} alt="Room8" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>5번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 8<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>        
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room9} alt="Room9" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>6번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 8<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>
            <Cards href="Rooms/R1">
                <div className='top'>
                    <img src={Room10} alt="Room10" />
                </div>
                <div className='bottom'>
                    <div className="left">
                        <h1 className='RoomTitle'>7번 회의실</h1>
                    </div>
                    <div className="right">
                        <span className='MaxPeople'>수용인원 : 4<FontAwesomeIcon className='FontAwesome' icon={faUsers} /></span>
                    </div>
                    <div className='realbottom'>
                        <h4 className='RoomDes'>회사 건물 3층 창가쪽에 있는 회의실로 방음이 잘 되는 것이 특징이다</h4>
                    </div>
                </div>
            </Cards>                 
        </RoomUnit>
    )
}
