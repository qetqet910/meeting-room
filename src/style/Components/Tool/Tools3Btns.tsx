import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUndoAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

const BtnsBox = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 2%;
    bottom: 4%;
    z-index: 99999;
    border-radius: 50px;
    padding: 3px 2px;

    input{
        display: none;
    }
    input[id="chkbox"]:checked ~ a{
        &:nth-of-type(1){
            transform: translateX(-103%);
        }
        &:nth-of-type(2){
            transform: translateX(-206%);
        }
    }
    label{
        display: grid;
        place-items: center;
        padding: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0px 2px;
        background-color: #FED766;
        box-shadow: 0px 0px 2px #14274e;
        color: #14274E;
        min-width: 20px;
        min-height: 20px;
        font-size: 2.2rem;
        cursor: pointer;
        z-index: 999;
        transition: all .5s;
        /* box-shadow: 0px 0px 5px #fff; */
        .FontAwesome{
            pointer-events: none;
        }
    }
`
const Toolbtn = styled.a`
    width: 20px;
    height: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    margin: 0px 2px;
    background-color: #FED766;
    box-shadow: 0px 0px 2px #14274e;
    color: #14274E;
    min-width: 20px;
    min-height: 20px;
    font-size: 2.2rem;
    transition: all .5s;
    cursor: pointer;
    .FontAwesome{
        pointer-events: none;
    }
`

function Tools3Btns(){

    const LinkTO = (event:any) => {
        window.history.back();
    }

    return(
        <BtnsBox>
            <input type="checkbox" name='checkbox' id='chkbox'/>
            <label htmlFor='chkbox'>
                <FontAwesomeIcon className='FontAwesome' icon={faTimes} />
            </label>
            <Toolbtn onClick={LinkTO}>
                <FontAwesomeIcon className='FontAwesome' icon={faUndoAlt} />
            </Toolbtn>
            <Toolbtn href='/home'>
                <FontAwesomeIcon className='FontAwesome' icon={faHome} />
            </Toolbtn>
        </BtnsBox>
    )
}

export default Tools3Btns;

// 도구 바 컴포넌트
// 사용법 ㄱ
//        import Tools3Btns from 'style/Components/Tool/Tools3Btns'; 
//        <Tools3Btns>