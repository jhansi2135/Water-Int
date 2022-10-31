import "./form.css";
import { useEffect, useState } from "react";

export function Form() {
  const [isActive, setIsActive] = useState(true);

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("userName");
    json && setUserName(JSON.parse(json));
  }, []);

  const [age, setAge] = useState(0);
  useEffect(() => {
    const json = localStorage.getItem("age");
    json && setAge(JSON.parse(json));
  }, []);

  const [gender, setGender] = useState("None");
  useEffect(() => {
    const json = localStorage.getItem("gender");
    json && setGender(JSON.parse(json));
  }, []);

  const [addInfo, setAddInfo] = useState("None");
  useEffect(() => {
    const json = localStorage.getItem("addInfo");
    json && setAddInfo(JSON.parse(json));
  }, []);

  const [calculate, setCalculate] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("calculate");
    json && setCalculate(JSON.parse(json));
  }, []);

  const handleNameChange = function (event) {
    const newUserName = event.target.value;
    setUserName(newUserName);
    try {
      const json = JSON.stringify(newUserName);
      localStorage.setItem("userName", json);
    } catch (error) {
      console.error("Could not save Name", error);
    }
  };
  const handleAgeChange = function (event) {
    const newAge = event.target.value;
    setAge(newAge);
    try {
      const json = JSON.stringify(newAge);
      localStorage.setItem("age", json);
    } catch (error) {
      console.error("Could not save Age", error);
    }
  };
  const handleGenderChange = function (event) {
    const newGender = event.target.value;
    setGender(newGender);
    try {
      const json = JSON.stringify(newGender);
      localStorage.setItem("gender", json);
    } catch (error) {
      console.error("Could not save Gender", error);
    }
  };
  const handleAddInfoChange = function (event) {
    const newAddInfo = event.target.value;
    setAddInfo(newAddInfo);
    try {
      const json = JSON.stringify(newAddInfo);
      localStorage.setItem("addInfo", json);
    } catch (error) {
      console.error("", error);
    }
  };
  const handleCalculateClick = function (event) {
    const data = { userName, age, gender, addInfo };
    setIsActive(false);
    if (age >= 1 && age <= 3) {
      setCalculate(userName + ", your task for today is to drink 0.8 litres.");
    }
    if (age >= 4 && age <= 8) {
      setCalculate(userName + ", your task for today is to drink 1.2 litres.");
    }
    if (age >= 9 && age <= 13) {
      setCalculate(
        userName + ", your task for today is to drink 1.6-1.9 litres."
      );
    }
    if (age >= 14 && age <= 18) {
      setCalculate(
        userName + ", your task for today is to drink 1.9 - 2.6 litres."
      );
    }
    if (age >= 19 && gender === "Male") {
      setCalculate(userName + ", your task for today is to drink 3.1 litres.");
    }
    if (age >= 19 && gender === "Female") {
      if (addInfo === "None") {
        setCalculate(userName + ", your task for today is to drink 2.2 litres.");
      }
      if (addInfo === "Pregnant-women") {
        setCalculate(userName + ", your task for today is to drink 2.4 litres.");
      }
      if (addInfo === "Breastfeeding-women") {
        setCalculate(userName + ", your task for today is to drink 3.1 litres.");
      }
    }
    if (age <= 0 || age > 81) {
      setCalculate("Insufficient Data");
    }
    if (userName === "") {
      setCalculate("Please Enter Your Name");
    }
    if (age === "") {
      setCalculate("Please Enter Your Age");
    }
    console.log(data);
    setColor(currentColor);
  };

  const [color, setColor] = useState();

  const colors = [
    "Aquamarine",
    "BlueViole",
    "Chartreuse",
    "CornflowerBlue",
    "Red",
    "Yellow",
    "Magenta",
    "Pink",
  ];
  const currentColor = colors[Math.floor(Math.random() * 8)];
  const divStyle = { color: color };

  return (
    <form className="form">
      {isActive ? (
        <div className="border">
          <br />
          <br />
          <div className="sep">
            <label for="name">Name</label>
            <br />
            <input
              id="name"
              type="text"
              onChange={handleNameChange}
              value={userName}
              className="input"
              placeholder="Enter your Name"
              required
            />
            <br />
            <label for="age">Age</label>
            <br />
            <input
              id="age"
              placeholder="Enter your Age"
              className="input"
              type="number"
              onChange={handleAgeChange}
              value={age}
              min="0"
              max="80"
              required
            />
          </div>
          <br />
          <br />
          <p>Gender: </p>
          <input
            type="radio"
            id="Female"
            name="Gender"
            onChange={handleGenderChange}
            checked={gender === "Female"}
            value="Female"
            onClick={() => setGender("Female")}
          />
          <label for="Female">Female</label>
          <input
            type="radio"
            id="Male"
            name="Gender"
            onChange={handleGenderChange}
            checked={gender === "Male"}
            value="Male"
            onClick={() => setGender("Male")}
          />
          <label for="Male">Male</label>
          <br />
          <br />
          <br />
          <label for="addinfo">Additional Information</label>
          <br />
          <select
            className="input"
            name="addInfo"
            onChange={handleAddInfoChange}
            value={addInfo}
            id="addinfo"
          >
            <option value="None">None</option>
            <option value="Pregnant-women">Pregnant Women</option>
            <option value="Breastfeeding-women">Breastfeeding Women</option>
          </select>
          <br />
          <br />
          <br />
          <button
            type="button"
            className="change input"
            onClick={handleCalculateClick}
            name="calbutton"
          >
            Calculate
          </button>
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div className="border">
          <br />
          <div style={divStyle}>{calculate}</div>
          <br />
          <br />
          <button className="change input" onClick={() => setIsActive(false)}>
            Back
          </button>
          <br />
          <br />
        </div>
      )}
    </form>
  );
}
