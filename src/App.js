import { useState } from "react";
import subIcon from "./images/icon-arrow.svg";
import './App.css';

const App = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [errd, setDerr] = useState();
  const [errm, setMerr] = useState();
  const [erry, setYerr] = useState();
  const [valdy, setVd] = useState();
  const [valmm, setVm] = useState();
  const [valyy, setVy] = useState();
  function calculateAge(birthDay, birthMonth, birthYear) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // January is 0
    const currentYear = currentDate.getFullYear();

    let ageInYears = currentYear - birthYear;
    let ageInMonths = currentMonth - birthMonth;
    let ageInDays = currentDay - birthDay;

    // Adjust for negative age in months or days
    if (ageInDays < 0) {
      ageInMonths--;
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      ageInDays += daysInLastMonth;
    }

    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
    }

    return {
      years: ageInYears,
      months: ageInMonths,
      days: ageInDays
    };
  }

  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const onSubmit = () => {
    //for day
    setDerr("");
    if (typeof day === "undefined") {
      setDerr("*Required");
    } else if (day > 1 && day < 31) {
      console.log("valid");
    } else {
      setDerr("Must be a valid day");
    }
    //for month
    setMerr("");
    if (typeof month === "undefined") {
      setMerr("*Required");
    } else if (month >= 1 && month <= 12) {
      console.log("valid");
    } else {
      setMerr("Must be a valid month");
    }
    //for year
    setYerr("");
    if (typeof year === "undefined") {
      setYerr("*Required");
    } else if (year >= 1 && year <= 2023) {
      console.log("valid");
    } else {
      setYerr("Must be a valid year");
    }
    //values
    if (
      day !== undefined &&
      month !== undefined &&
      year !== undefined &&
      day >= 1 &&
      day <= 31 &&
      month >= 1 &&
      month <= 12 &&
      year >= 1 &&
      year <= 2023
    ) {
      const result = calculateAge(day, month, year);
      const { years, months, days } = result;
      setVd(days);
      setVm(months);
      setVy(years);
    }
  };

  return (
    <div className="App">
      <div className="cont-main">
        <form className="form-cont">
          <div className="input-cont">
            <label className="leb-txt">DAY</label>
            <input
              type="number"
              placeholder="DD"
              className="input-tag"
              onChange={handleDay}
            />
            <p className="errmessage">{errd}</p>
          </div>
          <div className="input-cont">
            <label className="leb-txt">MONTH</label>
            <input
              type="number"
              placeholder="MM"
              className="input-tag"
              onChange={handleMonth}
            />
            <p className="errmessage">{errm}</p>
          </div>
          <div className="input-cont">
            <label className="leb-txt">YEAR</label>
            <input
              type="number"
              placeholder="YYYY"
              className="input-tag"
              onChange={handleYear}
            />
            <p className="errmessage">{erry}</p>
          </div>
        </form>
        <div className="sb-part">
          <p className="line">{}</p>

          <button type="button" className="but-sbt" onClick={onSubmit}>
            <img src={subIcon} alt="subtn" />
          </button>
        </div>
        <div>
          <p className="details">
            <span className="dash">{valmm === undefined ? "- -" : valyy}</span>{" "}
            Years
          </p>
          <p className="details">
            <span className="dash">{valmm === undefined ? "- -" : valmm}</span>{" "}
            Months
          </p>
          <p className="details">
            <span className="dash">{valdy === undefined ? "- -" : valdy}</span>{" "}
            Days
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
