import styled from 'styled-components';

const Div = styled.div`
  width: 500px;
  
  @media (max-width: 425px) {
    width: 95%
  }
`
const Formdesigne = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row wrap;
`
const Input = styled.input`
  outline: none;
  background: rgb(246, 246, 255);
  margin-bottom: 5px;
`


const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  margin-left: .9rem;
  padding: 0;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items-center
`

const completedStyle = {
    "background" : '#4beba1'
  }
  const DivTodo = styled.div`
    width: 500px;
    color: white;
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 1.5rem;

    @media (max-width: 425px) {
      width: 95%
    }
  `
    const AddButtonstylePosition = styled.div`
      position: fixed;
      bottom: 10px;
      right: 15px;
      z-index: 1
    `
    const AddButtonStyle = styled.button`
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      position: relative;
      border: none;
      background: #f9c7ff;
      -webkit-animation-name: pulse;
      animation-name: pulse;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;

      animation-iteration-count: infinite;
      

      @-webkit-keyframes pulse {
        0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        }
        50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        }
        }
        @keyframes pulse {
        0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        }
        50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        }
        } 

      &:before{
        width: 3rem;
        height: 3rem;
        content: "+";
        color: purple;
        font-weight: 500;
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-48%, -57%);
      }
    `

export {Div, Formdesigne, Input, Button, completedStyle, DivTodo, AddButtonstylePosition, AddButtonStyle}