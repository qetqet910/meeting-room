import styled from "styled-components"
import moment from "moment"
import 'moment/locale/ko';
import { useEffect, useState } from "react";
import { db } from '../firbase';
import { collection, query, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom";

// 09시 ~ 21시 / 한 시간씩 / 한 계정 최대 2시간
const ResCal = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(14,1fr);
    width: 94%;
    height: 60vh;
    margin: 12rem auto 0 auto;
    box-shadow: 1px 1px 3px #333;
    border-radius: 10px;
    h2{
        position: absolute;
        left: 50%;
        top: -6%;
        transform: translate(-50%, 0%);
        font-size: 3rem;
        font-weight: bold;
        text-decoration: underline;
    }
    .date{
        position: relative;
        background: linear-gradient(30deg, #f6f5f1 49%, #333 3%, #f6f5f1 52%);
        span{
            &:hover{background: none;}
            &:nth-child(1){
                position: absolute;
                left: 18%;
                bottom: 18%; 
            }
            &:nth-child(2){
                position: absolute;
                right: 18%;
                top: 18%;
            }
        }
    }
    .hrs{
        grid-row: 2 / 15;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(13, 1fr);
        div{
            display: grid;
            place-items: center;
            font-size: 2rem;
            font-family: "Ga Maamli", sans-serif;
        }
    }
    .dotw{
        grid-column: 2 / 9;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: 1fr;
        div{
            display: grid;
            place-items: center;
            font-size: 2rem;
            font-family: "Ga Maamli", sans-serif;
        }
    }
    span{
        &:hover{
            background-color: #333;
        }
    }
    #lines{
        grid-row: 2 / 15;
    }
`

export function ResCalF(){
    const [ monthData, setMonthData ] = useState();
    const [ ReserveData, setReserveData ] = useState([]);
    const pa = Object.values(useParams())[0];

    async function getReserve(){
        const q = query(collection(db, "Reservation"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(Number(doc.id.charAt(15)) == Number(pa)){
                // setReserveData(doc.data());
                console.log(doc.data());
            }
        });
    }
    
    let now = moment();
    const dotw = [];
    const hrs = [];
    for(let i = 9; i <= 21; i++){hrs[i] = i;}
    for(let i = 0; i < 7; i++){
        let strs = now.format("DD");
        switch(now.day()){
            case 0:
                strs += " (일)";
                break;
            case 1:
                strs += " (월)";
                break;
            case 2:
                strs += " (화)";
                break;
            case 3:
                strs += " (수)";
                break;
            case 4:
                strs += " (목)";
                break;
            case 5:
                strs += " (금)";
                break;
            case 6:
                strs += " (토)";
                break;
        }
        dotw[i] = strs;
        now.add(1, "days");
    }
 
    useEffect(() => {
        getReserve();
        setMonthData(now.format("MM"))
    })

    return(
        
        <ResCal>
            <h2>{monthData}월</h2>
            <div class="date">
                <span>시간</span>
                <span>날짜</span>
            </div>
            <div class="dotw">
                {
                    dotw.map((res) => 
                        <div>{res}</div>
                    )
                }
            </div>
            <div className="hrs">
                {
                    hrs.map((res) => 
                        <div>{res}</div>
                    )
                }
            </div>
            {dotw.map((res) => 
                <div class={res} id="lines">
                    
                </div>
            )}
        </ResCal>
    )
}