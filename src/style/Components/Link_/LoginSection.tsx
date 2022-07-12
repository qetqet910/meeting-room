import React, { useState } from 'react';
import styled from 'styled-components';
import { Particle50 } from 'service/particle/particle';
import Logo from 'img/Login/logo_transparent.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'firebaseConfig'
import { Link } from 'react-router-dom';

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
    flex-direction: column;
    margin-top: 40px;
    span{
      display: block;
      color: #3f3f3f87;
      font-size: .8vw;
      font-weight: bold;
      letter-spacing: -2px;
      word-spacing: 2px;
      font-family: 'Rajdhani', sans-serif;
      margin-top: 40px;
    }
    button{
      all: unset;
      position: relative;
      width: 100%;
      height: 80%;
      padding: 16px 0px;
      font-size: 1vw;
      font-weight: bold;
      font-family: 'Rajdhani', sans-serif;
      text-align: center;
      margin-top: 20px;
      cursor: pointer;
      vertical-align: middle;
      background-color: #4885fe;
      border-radius: 5px;
      transition: all .5s;
      .FontAwesome{
        color: #ffffff;
        font-size: 1.4vw;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        font-size: 1.4vw;
        font-weight: bold;
        font-family: 'Rajdhani', sans-serif;
        margin-left: 18px;
        margin-top: 2px;
        font-weight: bold;
        color: #fff;
        transition: all .5s;
      }
      &:hover{
        transform: translateY(-4px);
      }
    }
    a{
      all: unset;
      position: relative;
      height: 50%;
      padding: 4px;
      font-size: 1vw;
      font-weight: bold;
      font-family: 'Rajdhani', sans-serif;
      text-align: center;
      cursor: pointer;
      text-decoration: underline;
      transition: all .5s;
      .FontAwesome{
        color: #3f3f3fba;
        font-size: 1vw;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        color: #3f3f3fba;
        font-size: 1vw;
        transition: all .5s;
        margin-top: 16px;
        margin-left: 4px;
      }
    }
  }
`

const LoginSection = () => {
  // Sign UP
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");

  // Sign In
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [User, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser:any) => {
    setUser(currentUser);
  });
  
  // const register = async () => {
  //     try {
  //       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  //     } catch (error:any) {
  //       alert(error.message);
  //     }
  // };

  const login = async () => {
    try {
        const User = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
    } catch (error:any) {
        alert(error.message);
    }
  };
  
  // const logout = async () => {
  //     await signOut(auth);
  // };

  return (
    <>
        <Left>
          <Particle50 />
          <div className='Logodiv'>
            <img src={Logo} alt="Logo" className="Logo" />
            <p>Meeting Room Reservation Service, ver 1.0<br/>HyeonMin, All rights reserved.</p>
          </div>
        </Left>
        <Right>
          <Login>
            <div className="inputs">
              <span>
              <input autoComplete='off' placeholder='Please enter your ID' type="text" name='ID' />
                <FontAwesomeIcon className='FontAwesome' icon={faUser} />
              </span>
              <span>
                <input autoComplete='off' placeholder='Please enter your Password' type="password" name='password' />
                <FontAwesomeIcon className='FontAwesome' icon={faLock} />
              </span>
            </div>
            <div className="submits">
              <button name='SignIn'>
                <FontAwesomeIcon className='FontAwesome' icon={faSignInAlt} />
                <span>로그인</span>
              </button>
              <span>
                계정이 없으신가요?
              </span>
              <Link to={"/register"}>
                <FontAwesomeIcon className='FontAwesome' icon={faUserPlus} />
                <span>회원가입</span>
              </Link>
            </div>
          </Login>
        </Right>
    </>
  );  
}

export default LoginSection;