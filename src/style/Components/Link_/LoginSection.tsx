import styled from 'styled-components';
import { Particle50 } from 'service/particle/particle';
import Logo from 'img/Login/logo_transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faSignInAlt, faUserPlus, faRegistered } from '@fortawesome/free-solid-svg-icons'

const CenterDiv = styled.div`
  position: relative;
  max-width: 780px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(90deg,transparent,#14274E60, #463b7bac, #14274E60, transparent);
  .Logo{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    user-select: none;
    img{
      width: 22vw;
      filter: drop-shadow(0px 0px 10px #fff);
    }
  }
  .inputs{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 420px;
    padding: 0 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 3px #FED766;
    transition: all .5s;
    margin-top: 7rem; /*            */
    margin-bottom: 10rem;
    span{
      position: relative;
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid #fadf8e9e;
      .FontAwesome{
        position: absolute;
        left: 2%;
        top: 50%;
        transform: translate(-20%, -50%);
        color: #FED766;
        font-size: 1.8rem;
        transition: all .5s;
      }
      input{
        all: unset;
        height: 7rem;
        width: calc(100% - 3.5rem);
        font-size: 1.8rem;
        font-weight: bold;
        font-family: "Ga Maamli", sans-serif;
        font-weight: 400;
        padding-left: 3.5rem;
        border-radius: 2px;
        /* #fadf8e */
        color: #f6f5f1;
      }
    }
  }
  .submits{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 7rem;
    .btn{
      all: unset;
      position: relative;
      display: inline-block;
      padding: 1.2rem 1.4rem 1.2rem 3.4rem; 
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      vertical-align: middle;
      border-radius: 5px;
      transition: all .5s;
      .FontAwesome{
        position: absolute;
        left: 8%;
        top: 50%;
        transform: translateY(-50%);
        color: #fff1c8;
        font-size: 1.8rem;
        transition: all .5s;
      }
      span{
        display: inline-flex;
        border-bottom: none;
        font-size: 1.6rem;
        font-weight: bold;
        font-family: "Jua", sans-serif;
        font-weight: bold;
        color: #FED766;
        transition: all .5s;
      }
      &:hover{
        transform: translateY(-1px);
      }
    }
    a{
      all: unset;
      position: relative;
      height: 50%;
      padding: 4px;
      font-weight: bold;
      font-family: "Jua", sans-serif;
      text-align: center;
      cursor: pointer;
      transition: all .5s;
      .FontAwesome{
        color: #3f3f3fba;
        font-size: 1.4rem;
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
    }
  }
  p{
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    color: #f6f5f1;
    text-align: center;
    font-weight: bold;
    font-size: .8rem;
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
            <input autoComplete='off' placeholder='아이디' type="text" name='ID' />
            <FontAwesomeIcon className='FontAwesome' icon={faUser} />
          </span>
          <span>
            <input autoComplete='off' placeholder='비밀번호' type="password" name='password' />
            <FontAwesomeIcon className='FontAwesome' icon={faLock} />
          </span>
          <div className="submits">
          <button name='SignIn' className='btn'>
            <FontAwesomeIcon className='FontAwesome' icon={faSignInAlt} />
            <span>로그인</span>
          </button>
          <button name='SignIn' className='btn'>
              <FontAwesomeIcon className='FontAwesome' icon={faRegistered} />
              <span>회원가입</span>
            </button>
        </div>
        </div>
        <p>Meeting Room Reservation Service, ver 1.0<br/>HyeonMin, All rights reserved.</p>
      </CenterDiv>
    </>
  );  
}

export default LoginSection;