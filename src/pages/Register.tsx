import { useState } from 'react';
import styled from 'styled-components';
import { Particle100 } from 'service/particle/particle';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseConfig';

const Pages = styled.div`
    position: relative;
    display: block;
    background-color: none;
    color: none;
`
const RegisterForm = styled.form`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 50%;
    top: 50%;
    background: #fff;
    border-radius: 5px;
    padding: 20px 10px;
    box-shadow: 2px 2px 3px #eeeeee;
    transform: translate(-50%, -50%);
    font-family: 'Do Hyeon', sans-serif;
    letter-spacing: -2px;
    word-spacing: 2px;
    h1{
        font-size: calc(1vw + 18px);
        font-weight: 530;
        color: #333333e1;
    }
    h3{
        font-size: calc(.8vw);
        font-weight: 500;
        color: #333333e1;
        margin: 20px 0px;
    }
    input{
        all: unset;
        width: 20vw;
        min-height: 20px;
        font-size: calc(.8vw + 5px); 
        box-shadow: 1px 1px 3px #4885fe;
        margin: 10px 0px;
        font-weight: bold;
        color: #555;
        font-family: 'Rajdhani', sans-serif;
        border-radius: 5px;
        letter-spacing: -1px;
        padding: 10px 14px 10px 14px;
    }
    button{
      all: unset;
      position: relative;
      width: 100%;
      height: 80%;
      color: #fff;
      padding: 16px 0px;
      font-size: 1vw;
      font-weight: bold;
      font-family: 'Rajdhani', sans-serif;
      text-align: center;
      margin-top: 20px;
      vertical-align: middle;
      background-color: #4885fe;
      border-radius: 5px;
      transition: all .5s;
      cursor: pointer;
    }
`
const PasswordPower = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li{
        display: block;
        padding: 20px 0px 0px 6px;
        
    }
`


function Register() {
    // 비밀번호 파워, 비밀번호 재확인
    const [ realPassword, realPasswordSet ] = useState('');
    const [ PassAt, PassAtSet ] = useState('');
    const [ PassWord, PassWordSet ] = useState('');
    const [ Checking, CheckingSet ] = useState('');
    
    // 회원가입
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // 비밀번호 관련 함수들
    function validatePassword(event:any){
        if(realPassword === event.target.value){
            PassWordSet(cur => cur = '일치')
            setRegisterPassword(cur => cur = event.target.value)
            CheckingSet(cur => cur = '')
        }else{
            PassWordSet(cur => cur = '비밀번호가 일치하지 않습니다 다시 입력해주세요.')
            CheckingSet(cur => cur = '1')
        }
    }

    const PasswordStrength = (event:any) => {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        var pwd = event.target;
        
        realPasswordSet(cur => cur = pwd.value);

        if (false === enoughRegex.test(pwd.value)) {
            PassAtSet(cur => cur = '비밀번호는 최소 8자 이상이어야 합니다.')
            CheckingSet(cur => cur = '1' )
        } else if (strongRegex.test(pwd.value)) {
            PassAtSet(cur => cur = '강함')
            CheckingSet(cur => cur = '')
            setRegisterPassword(cur => cur = pwd.value)
        } else if (mediumRegex.test(pwd.value)) {
            PassAtSet(cur => cur = '보통')
            CheckingSet(cur => cur = '')
            setRegisterPassword(cur => cur = pwd.value)
        } else {
            PassAtSet(cur => cur = '쉬움')
            CheckingSet(cur => cur = '')
            setRegisterPassword(cur => cur = pwd.value)
        }
    }

    const register = async (event:any) => {
        event.preventDefault();
        if(Checking === '1'){
            alert("비밀번호가 조건에 맞지 않습니다 (8자 이상, 불일치)");
        }else{
            console.log(auth, registerEmail, registerPassword)
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerPassword
                );
                alert('가입되었습니다.');
                window.location.replace("/");
            } catch (error:any) {
                alert(error.message);
            }
        }
    };

    return (
        <Pages>
            <Particle100/>
            <RegisterForm> 
                <h1>MRRS 회원가입</h1>
                <h3>하나의 아이디로 MRRS의 다양한 서비스를 이용해 보세요.</h3>
                <input type="text" required autoComplete='off' placeholder='사용자 이름' name='username'/>
                <input type="email" required autoComplete='off' placeholder='사용자 이메일 주소' name='email' onChange={(e => {setRegisterEmail(cur => cur = e.target.value)})}/>
                <PasswordPower id='f1'>
                    <li>{PassAt === '' ? '비밀번호 보안 강도' : PassAt}</li>
                </PasswordPower>
                <input type="password" required onChange={PasswordStrength} autoComplete='off' placeholder='사용자 비밀번호' name='password' minLength={8} id='password'/>
                <PasswordPower id='f1'>
                    <li>{PassWord === '' ? '비밀번호 재확인' : PassWord}</li>
                </PasswordPower>
                <input type="password" required onChange={validatePassword} autoComplete='off' placeholder='사용자 비밀번호 확인' name='password_confirm' minLength={8} id='password_confirm'/>
                <button type='submit' onClick={register}>가입하기</button>
            </RegisterForm>
        </Pages>
    );
}

export default Register;