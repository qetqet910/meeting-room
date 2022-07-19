import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lekton&display=swap');
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body{
        min-height: 100vh;
        overflow: hidden;
    }


    html{
        font-size: 62.5%;
    }
    @media screen and (max-width: 1760px) {
        html{
            font-size: 55%;
        }
    }
    @media screen and (max-width: 1600px) {
        html{
            font-size: 50%;
        }
    }
    @media screen and (max-width: 1440px){
        html{
            font-size: 45%;
        }
    }
    @media screen and (max-width: 1280px){
        html{
            font-size: 45%;
        }
    }
    @media screen and (max-width: 1120px){
        html{
            font-size: 45%;
        }
    }
    @media screen and (max-width: 960px){
        html{
            font-size: 45%;
        }
    }
    @media screen and (max-width: 800px){
        html{
            font-size: 45%;
        }
    }
    @media screen and (max-width: 640px){
        html{
            font-size: 40%;
        }
    }
    @media screen and (max-width: 480px){
        html{
            font-size: 40%;
        }
    }
    @media screen and (max-width: 380px){
        html{
            font-size: 40%;
        }
    }



    // FirebaseUI Provider CSS

    #firebaseui_container{
        width: 100%;
        max-width: 500px !important;
        .firebaseui-container{
            max-width: 500px !important;
        }
        div{
            margin: 0px 0px!important;
            width: 100% !important;
            div{
                padding: 0px 0px!important;
                width: 100%;
                form{
                    padding: 0px 0px!important;
                    width: 100%;
                    ul{
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(1, 5rem);
                        gap: 1rem;
                        li{
                            margin: 0px !important;
                            &:nth-of-type(1){
                                button{
                                    background-color: #ffffff!important;
                                    span{
                                        color: #757575;
                                    }
                                }
                            }
                            button{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
                                height: 100%;
                                margin: 0px !important;
                                padding: 0px !important;
                                span{
                                    font-family: 'Lekton', sans-serif !important;
                                    letter-spacing: 0px;
                                    &:nth-of-type(1){
                                        display: inline-block;
                                        margin: 0rem;
                                        img{
                                            transform: scale(1.4);
                                        }
                                    }
                                    &:nth-of-type(2),
                                    &:nth-of-type(3){
                                        display: none;
                                    }
                                    display: inline-block;
                                    margin-bottom: 7px;
                                    font-size: 1.6rem;
                                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default GlobalStyle;