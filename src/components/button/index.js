import styled from 'styled-components'


const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid white;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;


  &:hover{
    opacity: .5;
  }

  /*@media(max-width: 800px){
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }*/ 
`

export default Button