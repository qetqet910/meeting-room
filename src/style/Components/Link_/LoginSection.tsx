import { useRef, useState } from 'react';
import styled from 'styled-components';

import { Particle50 } from 'service/particle/particle';
import Logo from 'img/Login/logo_transparent.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const CenterDiv = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #14274E;
  border-radius: 50px;
  flex-direction: column;
  overflow: hidden;
  .Logo{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    img{
      width: 200%;
      transform: scale(1.07);
    }
  }


  .inputs{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    span{
      position: relative;
      display: inline-block;
      width: 100%;
      min-height: 60px;
      margin: 14px 0px;
      .FontAwesome{
        position: absolute;
        left: 2%;
        /* padding-left: 20px; */
        top: 50%;
        transform: translateY(-50%);
        color: #4885fe;
        font-size: 1.8rem;
        transition: all .5s;
      }
      input{
        all: unset;
        width: calc(100% - 62px); height: 100%;
        padding: 2px 3px;
        font-size: 1.6rem;
        font-weight: bold;
        font-family: 'Rajdhani', sans-serif;
        padding-left: 3.2rem;
        transition: all .3s;
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
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    .btn{
      all: unset;
      position: relative;
      width: 48%;
      height: 60%;
      padding: 8px 0px;
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
        font-size: 2.4rem;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        font-size: 1.75rem;
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
      font-weight: bold;
      font-family: 'Rajdhani', sans-serif;
      text-align: center;
      cursor: pointer;
      transition: all .5s;
      .FontAwesome{
        color: #3f3f3fba;
        font-size: 1.8rem;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        color: #3f3f3fba;
        font-size: 1.8rem;
        transition: all .5s;
        margin-top: 16px;
        margin-left: .6rem;
      }
      &::after{
        content: '';
        position: absolute;
        left: 0px;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #3f3f3f9e;
      }
      &:hover{
        &::after{
          background-color: #272727e1;
        }
      }
    }
  }
`

const LoginSection = () => {
  
  return (
    <>
      <Particle50 />
      <CenterDiv> 
        <div className='Logo'>
          <img src={Logo} alt="Logo" />
        </div>

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
          <button name='SignIn' className='btn'>
            <FontAwesomeIcon className='FontAwesome' icon={faSignInAlt} />
            <span>로그인</span>
          </button>
          <button name='SignIn' className='btn'>
              <FontAwesomeIcon className='FontAwesome' icon={faSignInAlt} />
              <span>회원가입</span>
            </button>
        </div>
        <p>Meeting Room Reservation Service, ver 1.0<br/>HyeonMin, All rights reserved.</p>
      </CenterDiv>
    </>
  );  
}

export default LoginSection;