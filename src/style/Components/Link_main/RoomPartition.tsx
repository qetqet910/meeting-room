import styled from 'styled-components';

import Room1 from 'img/Main/Rooms/room1.jpg';
import Room2 from 'img/Main/Rooms/room2.jpg';
import Room3 from 'img/Main/Rooms/room3.jpg';
import Room4 from 'img/Main/Rooms/room4.jpg';
import Room5 from 'img/Main/Rooms/room5.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const RoomUnit = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 350px);
    grid-template-rows: repeat(3, 350px);
    gap: 30px 20px;
    width: 100%;
    height: 100%;
`
const Cards = styled.a`
    position: relative;
    display: block;
    width: 350px;
    min-height: 350px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px #dfe4ea;
    border-radius: 10px;
    overflow: hidden;
    transition: all .25s;
    text-decoration: none;
    z-index: 999;
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
        width: calc(100% - 20px);
        height: calc(90px - 20px);
        padding: 10px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        .left{
            .RoomTitle{
                color: #333;
                font-size: calc(18px + .2vw);
                font-weight: bold;
                font-family: 'Do Hyeon', sans-serif;
                letter-spacing: -2px;
                word-spacing: 2px;
                color: #1f386b;
            }
        }
        .right{
            text-align: right;
            color: #666;
            font-size: calc(12px + .2vw);
            font-weight: bold;
            letter-spacing: -2px;
            word-spacing: 2px;
            svg{
                font-size: calc(10px + .2vw);
                margin-bottom: 1px;
                margin-left: 6px;
                color: #1f386b;
            }
        }
        .realbottom{
            grid-column: span 2;
            color: #1f386b;
            font-size: calc(12px + .2vw);
            line-height: calc(16px + .2vw);
            font-family: 'Do Hyeon', sans-serif;
            font-weight: 510;
            margin-top: 10px;
        }
    }
`   

export function RoomPartition(){

    function textLengthOverCut(txt:any, len?:any, lastTxt?:any) {
        if (len === "" || len === null) { // 기본값
            len = 20;
        }
        if (lastTxt === "" || lastTxt === null) { // 기본값
            lastTxt = "...";
        }
        if (txt.target.innerText.length > len) {
            txt.target.inenrText = txt.target.innerText.substr(0, len) + lastTxt;
        }
    }

    return(
        <RoomUnit>
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">         
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
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">
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
            <Cards href="/home">
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
        </RoomUnit>
    )
}
