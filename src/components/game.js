import React, { useState } from "react";
import "./style.css";

const Game = () => {
  const [tickTime, setTickTime] = useState(200);
  const [rows, setRows] = useState(30);
  const [cols, setCols] = useState(30);
  const [grid, setGrid] = useState([]);
  const [food, setFood] = useState({});
  const [snake, setSnake] = useState({
    head: {},
    tail: []
  })
  const [direction, setDirection] = useState("right");
  const [dead, setDead] = useState(false);


  return(
    <>
    
    </>
  )
}

export default Game;