import { useState } from 'react'
import './index.css'

function App() {
  const[height,setheight] = useState("");
  const[weight,setweight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = () => {
    const bmiWeight = parseInt(weight);
    const bmiHeight = parseInt(height);

    if (bmiHeight === '' || bmiHeight < 0 ) {
      setBmi("");
      setMessage("");
      alert("Please enter valid values for weight and height");
      return;
    }

    const bmiValue = (bmiWeight / ((bmiHeight * bmiHeight) / 10000)).toFixed(2);
    setBmi(bmiValue);

    let text = "";
    if (bmiValue < 18.6 || bmiValue < 0) {
      text = "Underweight";
    } else if (bmiValue === 18.6 || bmiValue > 18.6 || bmiValue < 24.9 || bmiValue === 24.9) {
      text = "Normal weight";
    }if (bmiValue > 24.9) {
      text = "Overweight";
    }
    setMessage(text);
  };

  return (
    <>
    <div class="container">
      <div class="canva">
        <div class="bmi"><span>BMI CALCULATOR</span></div>
        <form action="#">
          <p>
            <label>Height in CM:</label>
            <input type="number" id="Height" placeholder='Enter the height' value={height} onChange={(e) => setheight(e.target.value)}/>
          </p>
          <p>
            <label>Weight in KG:</label>
            <input type="number" id="Weight"  placeholder='Enter the weight' value={weight} onChange={(e) => setweight(e.target.value)}/>
          </p>
          <button onClick={calculateBmi}>Calculate</button>
          <div id="weight-Guide">
          {bmi && message && (
        <div className="result">
          Your BMI is {bmi} - {message}
        </div>
      )}
            <h3>BMI Weight Guide</h3>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>Overweight = Greater than 24.9</p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
