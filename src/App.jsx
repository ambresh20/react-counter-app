import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0) ;

  function decreaseHandler(){
    setCount(count - 1) ;
  }

  function increaseHandler() {
    setCount(count + 1) ;
  }

  function resetHandler(){
    setCount(0) ;
  }

  return (

    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center  bg-[#344151] gap-10 ">

      <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>

      <div className="flex justify-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">

        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" > - </button>

        <div className="font-bold gap-12 text-5xl"> {count} </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
        
      </div> 

      <button type="button" onClick={resetHandler} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xl px-4 py-2 text-center me-2 mb-2">Reset</button>

    </div>
  );
}

export default App;
