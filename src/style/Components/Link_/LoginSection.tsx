import React, { useState } from 'react';
import styled from 'styled-components';

import Particle from 'service/particle/particle';
import Logo from 'img/Login/logo_transparent.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();

// import LowPoly from "img/Login/Hexagon.png";
// import Logo from "img/Login/logo_transparent.png";
// Logins

// const EmailAccount = (e) => {
//   e.preventDefault();

//   if(e.target.innerText == "Sign In"){
//     return signInEmailAccount(Email.value, Password.value)
//   }else if(e.target.innerText == "Sign Up"){
    
//   }else{
    
//   }
// }

// Styled-Components

const Left = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 50%;
  height: 100vh;
  box-shadow: 0px 0px 20px #2f3542;
  overflow: hidden;
  .Logodiv{
    position: absolute;
    left: 0px;
    user-select: none;
    pointer-events: none;
    .Logo{
      position: fixed;
      left: 25%;
      top: 30%;
      width: 25%;
      height: 55%;
      transform: translate(-50%, -30%);
      z-index: 999;
    }
    p{
      position: fixed;
      font-size: .8vw;
      text-align: center;
      color: #cccccc;
      left: 25%;
      top: 62%;
      transform: translate(-50%, -50%);
    }
  }
`
const Right = styled.div`
  position: absolute;
  left: 50%;
  top: 0px;
  width: 50%;
  height: 100vh;
  overflow: hidden;
`
const Login = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 50%;
  width: 45%;
  height: 40%;
  transform: translate(-50%, -50%);
  .inputs{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span{
      position: relative;
      display: block;
      width: 100%;
      min-height: 60px;
      margin: 14px 0px;
      .FontAwesome{
        position: absolute;
        padding-left: 20px;
        top: 50%;
        transform: translateY(-28%);
        color: #4885fe;
        font-size: 1.2vw;
        transition: all .5s;
      }
      input{
        all: unset;
        width: calc(100% - 62px); height: 100%;
        padding: 4px;
        border-bottom: 1px solid #4885fe;
        font-size: 1vw;
        font-weight: bold;
        font-family: 'Rajdhani', sans-serif;
        padding-left: 62px;
        transition: all .5s;
      }

      input:not(:placeholder-shown){
        border-bottom: 1px solid #1f386b;
      }
      input:not(:placeholder-shown) ~ .FontAwesome{
        color: #1f386b;
      }
    }
  }
  .submits{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    button{
      all: unset;
      position: relative;
      width: 100%;
      height: 50%;
      padding: 4px;
      font-size: 1vw;
      font-weight: bold;
      font-family: 'Rajdhani', sans-serif;
      text-align: center;
      margin-top: 20px;
      cursor: pointer;
      transition: all .5s;
      .FontAwesome{
        color: #4885fe;
        font-size: 1.4vw;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        font-size: 1.2vw;
        font-weight: bold;
        font-family: 'Rajdhani', sans-serif;
        margin-left: 18px;
        font-weight: bold;
        color: #333;
        transition: all .5s;
      }
      &:hover{
        .FontAwesome{
          transform: scale(1.5);
          color: #1f386b;
          /* animation: BTNS 2s infinite ease-in-out; */
        }
        span{
          color: #1f386b;
        }
      }
    }
  }
`

const LoginSection = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      } catch (error:any) {
        alert(error.message);
      }
  };

  return (
    <>
        <Left>
          <Particle />
          <div className='Logodiv'>
            <img src={Logo} alt="Logo" className="Logo" />
            <p>Meeting Room Reservation Service, ver 1.0<br/>HyeonMin, All rights reserved.</p>
          </div>
        </Left>
        <Right>
          <Login>
            <div className="inputs">
              <span>
                <input autoComplete='off' placeholder='Please enter your ID' type="text" name='ID' onChange={(e) => { setRegisterEmail(cur => cur = e.target.value) }}/>
                <FontAwesomeIcon className='FontAwesome' icon={faUser} />
              </span>
              <span>
                <input autoComplete='off' placeholder='Please enter your Password' type="password" name='password' onChange={(e) => { setRegisterPassword(cur => cur = e.target.value) }} />
                <FontAwesomeIcon className='FontAwesome' icon={faLock} />
              </span>
            </div>
            <div className="submits">
              <button name='SignIn'>
                <FontAwesomeIcon className='FontAwesome' icon={faSignInAlt} />
                <span>로그인</span>
              </button>
              <button name='SignUp' onClick={register}>
                <FontAwesomeIcon className='FontAwesome' icon={faUserPlus} />
                <span>회원가입</span>
              </button>
            </div>
          </Login>
        </Right>
    </>
  );  
}

export default LoginSection;