import { useState } from "react";

const RollOfTheDice = () => {

    const faces = [
        { value: 1, counter: 0},
        { value: 2, counter: 0},
        { value: 3, counter: 0},
        { value: 4, counter: 0},
        { value: 5, counter: 0},
        { value: 6, counter: 0},
    ]
    const [sum, setSum] = useState(0);
    const [counters, setCounters] = useState(faces);
    const [firstResult, setFirstResult] = useState(null);
    const [secondResult, setSecondResult] = useState(null);
    const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
    const rollDice = () => {
        let result1 = getRandomNumber();
        let result2 = getRandomNumber();
        let spreadedFaces = [...counters];
        spreadedFaces.find(f => f.value === result1).counter++;
        spreadedFaces.find(f => f.value === result2).counter++;
        setCounters(spreadedFaces);
        setFirstResult(result1);
        setSecondResult(result2);
        setSum(() => result1 + result2);
    }

    const hundredRoll = () => {
        const n = 100;
        for (let i = 0; i <= n; i++) {
            rollDice();
        }
    }

    return (
       <div className="diceBox">
           <div className="diceFlexBox">
              <div className="diceResult">{firstResult}</div>
              <div className="diceResult">{secondResult}</div>
           </div>   
           <div className="flexButtons">
              <button type="button" onClick={rollDice}>Roll the Dice!</button>
              <button type="button" onClick={hundredRoll}>x100</button>
           </div>
           { counters.map(f => <div key={f.value}>{f.value} - {f.counter}</div>)}
           {`Sum of the Numbers: ${sum}`}
       </div>
       
    );
}

export default RollOfTheDice;
