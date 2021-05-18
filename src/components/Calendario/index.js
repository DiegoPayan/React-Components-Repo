import React, { useEffect, useState } from 'react';

import './style.css';

const Calendario = () => {

  const [day, setDay] = useState([]);

  useEffect(() => {
    let arr = [];
    if (day.length <= 30) for (let i = 1; i <= 30; i++) arr.push(i);
    setDay(arr);
  }, []);

  return (
    <div className="calendar_wrapper">
      { day && day.length && day.map(elem => {
        return (
          <div key={elem} > {elem} </div>
        );
      })
      }
    </div>
  );
}

export default Calendario;