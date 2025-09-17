import React, { useState } from "react";

function App() {
  const [input,setInput] = useState("");
  const [result, setResult] = useState("");

  // const handleclick = (value) => {
  //   setInput("")
  //   setResult("")
  // }

  const handleclick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } 

    else if (value === "="){
      calculate()
    }

    else {
      setInput((prev) => prev + value);
    }
  };

  const calculate = () => {
   if(!input || /[/*+\-]$/.test(input)){
    setResult("Error")
    return;
   }


    try{
      const evaluated_res = eval(input);

      if (evaluated_res === Infinity){
        setResult("Infinity")
      }
      else if (isNaN(evaluated_res)){
        setResult("NaN")
      }
      else{
        setResult(evaluated_res)
      }

    }catch(error){
      setResult(error);
    }

  }

   const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];



  return (
    <div className="App">

      <h1>React Calculator</h1>
      <form>
        <input
        type = "text"
        placeholder="0"
        value={input}
        //onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="buttons">
        {buttons.map((btn) => (
          <button key ={btn} onClick={() => handleclick(btn)}>
            {btn}
          </button>
        ))}
 



      </div>

      <div className="result">
         {result}
      </div>
   
    </div>
  );
}

export default App;
