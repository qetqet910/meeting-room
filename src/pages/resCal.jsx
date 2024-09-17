import styled from "styled-components"
import moment from "moment"
import 'moment/locale/ko';

// 09시 ~ 21시 / 한 시간씩 / 한 계정 최대 2시간
const ResCal = styled.div`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(14,1fr);
    width: 94%;
    height: 60vh;
    margin: 10rem auto 0 auto;
    box-shadow: 1px 1px 3px #333;
    border-radius: 10px;
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
`

export function ResCalF(){
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
 
    return(
        
        <ResCal>
            <div>시간/날짜</div>
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

            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </ResCal>
    )
}