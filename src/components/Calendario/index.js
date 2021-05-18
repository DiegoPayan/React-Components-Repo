import React, { useEffect, useState } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { DateTime, Info } from 'luxon';

import './style.css';

const Calendario = () => {

  const [day, setDay] = useState([]);
  const [date, setDate] = useState(DateTime.now())

  useEffect(() => {
    let arr = [];
    if (day.length <= 30) for (let i = 1; i <= 30; i++) arr.push(i);
    setDay(arr);
    //console.log(DateTime.now().daysInMonth);
  }, []);

  return (
    <div className="calendar_wrapper">
      <div className="header">
        <div> Calendario </div>
        <div>
          <button><NavigateBefore /></button>
          <div> {date.monthLong.toUpperCase()} </div>
          <button><NavigateNext /></button>
        </div>
        <div> {date.year} </div>
      </div>
      <div className="body">
        {Info.weekdays().map(elem => {
          return <div className="Calendarheader" key={elem}> {elem.toUpperCase()} </div>
        })
        }
        {day && day.length && day.map(elem => {
          return (
            <div className="Calendarbody" key={elem}> {elem} </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Calendario;