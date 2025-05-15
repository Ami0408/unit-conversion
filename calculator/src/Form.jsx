import React, { useState } from 'react';

export default function Form() {
  const [display, setDisplay] = useState('---Unit Conversion ---');
  const [answer, setAnswer] = useState('');
  const [units, setUnits] = useState('');
  function calculate(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    const options = formData.get("opt");
    const ValueInput = parseFloat(formData.get("input"));
    let newDisplay;
    let newAnswer;
    let newUnits;

    if (options === "ftc") {
      newDisplay = "Conversion from Fahrenheit to Celsius";
      newUnits = "°C";
      newAnswer = (ValueInput - 32) * 5 / 9;
    } else if (options === "ctf") {
      newDisplay = "Conversion from Celsius to Fahrenheit";
      newAnswer = ValueInput * 9 / 5 + 32;
      newUnits = "°F";
    } else if (options === "mti") {
      newDisplay = "Conversion from Metres to Inches";
      newAnswer = ValueInput * 39.3701;
      newUnits = "inches";
    } else if (options === "itm") {
      newDisplay = "Conversion from Inches to Metres ";
      newAnswer = ValueInput * 0.0254;
      newUnits = newAnswer > 1 ? "metres" : "metre";
    } else {
      newDisplay = '---Unit Conversion ---';
      newAnswer = '';
    }

    setDisplay(newDisplay);
    setAnswer(newAnswer);
    setUnits(newUnits);
  }

  return (
    <section>
      <form onSubmit={calculate}>
        <select name="opt">
          <option disabled>---Unit Conversion ---</option>
          <option value="ftc" defaultValue ={true}>
            Fahrenheit &#x2192; Celsius
          </option>
          <option value="ctf">
            Celsius &#x2192; Fahrenheit
          </option>
          <option value="mti">
            Metres &#x2192; Inches
          </option>
          <option value="itm">
            Inches &#x2192; Metres
          </option>
        </select>
        <label htmlFor="field">{display}</label>
        <input type="text" name="input" id="field" />
        <button type="submit">Calculate</button>
        <span className ='result'>{answer !== '' && `Result: ${answer} ${units}`}</span> {/* Conditional rendering of the result */}
      </form>
    </section>
  );
}
