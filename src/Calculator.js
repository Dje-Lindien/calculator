import './Calculator.css';
import BeautifulScreen from './BeautifulScreen';
import AmazingNumberButton from './AmazingNumberButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from './GreatOperationButton';
import { useState, useEffect } from 'react';
import ItsOver9000 from './ItsOver9000';



function Calculator() {
  const [result, setResult] = useState("");
  const [calcul, setCalcul] = useState("");
  const [overText, setOverText] = useState("");

  // Calcul
  const addNumb = (e) => {
    setCalcul(calcul.concat(e.target.value));
  }

  // Resultat du calcul
  const calculate = () => {
    try {
      setResult(eval(calcul).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  // Message d'erreur > 9000
  useEffect(() => {
    if (result > 9000) {
      setOverText("It's over 9000 !!!");
    } else {
      setOverText("");
    }
  }, [result]);

  // Fonction effacer tout
  const clear = () => {
    setResult("");
    setCalcul("");
  }

  // Fonction effacer 1
  const backspace = () => {
    setResult(result.slice(0, - 1));
  }

  
  return (
    <div className="App">

      <div className="calculator">
        <ItsOver9000 overText={overText}/>

        <div className="title">
            <h2>Calculator 9000</h2>
        </div>

        <div className="display">
            <BeautifulScreen result={result} calcul={calcul}/>
        </div>
        
        <div className="buttons_calculator">
            {/* 1st line */}
            <GreatOperationButton className="operate" value="+" onClick={addNumb}/>
            <GreatOperationButton className="operate" value="-" onClick={addNumb}/>
            <GreatOperationButton className="operate" value="/" onClick={addNumb}/>
            <GreatOperationButton className="operate" value="*" onClick={addNumb}/>
            {/* 2nd line */}
            <AmazingNumberButton className="" value="7" onClick={addNumb}/>
            <AmazingNumberButton className="" value="8" onClick={addNumb}/>
            <AmazingNumberButton className="" value="9" onClick={addNumb}/>
            <GreatOperationButton className="erase" value="CE" onClick={backspace}/>
            {/* 3rd line */}
            <AmazingNumberButton className="" value="4" onClick={addNumb}/>
            <AmazingNumberButton className="" value="5" onClick={addNumb}/>
            <AmazingNumberButton className="" value="6" onClick={addNumb}/>
            <GreatOperationButton className="erase" value="C" onClick={clear}/>
            {/* 4th line  */}
            <AmazingNumberButton className="un" value="1" onClick={addNumb}/>
            <AmazingNumberButton className="" value="2" onClick={addNumb}/>
            <AmazingNumberButton className="" value="3" onClick={addNumb}/>
            <AmazingNumberButton className="none" value="0" onClick={addNumb}/>
            {/* last line */}
            <AmazingNumberButton className="" value="0" onClick={addNumb}/>
            <AmazingNumberButton className="" value="." onClick={addNumb}/>
            <MagnificientEqualButton className="egal" value="=" onClick={calculate}/>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
