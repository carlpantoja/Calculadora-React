import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  background-color: black;
  border-radius: 1em;
  padding: 0.5em;
`;

const H2 = styled.h2`
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
  font-size: 2.5em;
`;

const Button = styled.button`
  width: 3em;
  height: 3em;
  font-size: 1.5em;
  border: none;
  border-radius: 2em;
  margin-left: 0.5em;
  margin-right 0.5em;
  margin-bottom: 0.5em;
  color: ${props => (props.operacao ? 'white' : '')};
  background-color: ${props => (props.operacao ? '#FF9500' : '')};
  color: ${props => (props.numero ? 'white' : '')};
  background-color: ${props => (props.numero ? '#505050' : '')};
  &:hover{
    cursor: pointer;
  }
`;

function Calculator() {
  const [num,setNum] = useState(0);
  const [oldNum,setOldNum] = useState(0);
  const [operator,setOperator] = useState();
  
  function inputNum(e){
    if(num === 0){
      setNum(e.target.value);
    }else{
      setNum(num + e.target.value);
    }
  }

  function clear(){
    setNum(0);
  }

  function porcentagem(){
    setNum(num/100);
  }

  function sign(){
    if(num>0){
      setNum(-num);
    }else{
      setNum(num * (-1));
    }
  }

  function operatorHandler(e){
    setOperator(e.target.value);
    setOldNum(num);
    setNum(0);
  }

  function calculate(){
    if(operator === '/'){
      setNum(oldNum / num);
    }
    if(operator === 'X'){
      setNum(oldNum * num);
    }
    if(operator === '-'){
      setNum(oldNum - num);
    }
    if(operator === '+'){
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return(
    <Container>
      <Wrapper>
        <H2>{num}</H2>
        <Button onClick={clear}>AC</Button>
        <Button onClick={sign}>+/-</Button>
        <Button onClick={porcentagem}>%</Button>
        <Button operacao onClick={operatorHandler} value={'/'}>/</Button>
        <Button numero onClick={inputNum} value={7}>7</Button>
        <Button numero onClick={inputNum} value={8}>8</Button>
        <Button numero onClick={inputNum} value={9}>9</Button>
        <Button operacao onClick={operatorHandler} value={'X'}>X</Button>
        <Button numero onClick={inputNum} value={4}>4</Button>
        <Button numero onClick={inputNum} value={5}>5</Button>
        <Button numero onClick={inputNum} value={6}>6</Button>
        <Button operacao onClick={operatorHandler} value={'-'}>-</Button>
        <Button numero onClick={inputNum} value={1}>1</Button>
        <Button numero onClick={inputNum} value={2}>2</Button>
        <Button numero onClick={inputNum} value={3}>3</Button>
        <Button operacao onClick={operatorHandler} value={'+'}>+</Button>
        <Button numero onClick={inputNum} value={0}>0</Button>
        <Button numero onClick={inputNum} value={'.'}>.</Button>
        <Button onClick={calculate}>=</Button>
      </Wrapper>
    </Container>
  );
}

export default Calculator;