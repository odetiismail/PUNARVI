// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
import { Main } from "./Main";
import { getData } from "./Slice/CounterSlice";
import { useAppDispatch } from "./Hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(getData());
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
