import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(()=>{
    if(timeRemaining===0){
      setTimeRemaining(10);
      onAnswered(false)
      return;
    }

    const timerId = setTimeout(()=>{
        setTimeRemaining(timeRemaining-1);}
      ,1000);

    return function cleanup() {
      clearTimeout(timerId);
    }

  },[timeRemaining, onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
  }
};