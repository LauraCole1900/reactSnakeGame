import React, { useState } from "react";
import { useKeypress } from "../utils";
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

  const getRandomGrid = () => {
    return {
      row: Math.floor((Math.random() * rows)),
      col: Math.floor((Math.random() * cols))
    }
  }

  // Set snake and food to start at center of grid
  const gridCenter = () => {
    return {
      row: Math.floor((rows - 1) / 2),
      col: Math.floor((cols - 1) / 2)
    }
  }


  return (
    <>

    </>
  )
}

export default Game;