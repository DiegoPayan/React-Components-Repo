import React, { useState, useEffect } from 'react';
import './style.css';

const Temporizador = () => {

  const [remainingTime, setRemainingTime] = useState(86402);

  useEffect(() => {

    if (!remainingTime) return;

    const interval = setInterval(() => {
      setRemainingTime(remainingTime - 1);
    }, 1000)

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime])

  const getTime = () => {
    let auxTime = remainingTime;

    const days = formatNumber(Math.floor(auxTime / 86400));
    auxTime -= days * 86400;

    const hours = formatNumber(Math.floor(auxTime / 3600) % 24);
    auxTime -= hours * 3600;

    const minutes = formatNumber(Math.floor(auxTime / 60) % 60);
    auxTime -= minutes * 60;

    const seconds = formatNumber(auxTime % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  const formatNumber = (number) => {
    return number.toString().length < 2 ? '0' + number : number;
  }

  const getTemplate = (number) => {
    let template;
    switch (number.toString()) {
      case "0": template = [[1, 1], [1, 0, 1], [1, 1]]; break;
      case "1": template = [[0, 0], [0, 0, 0], [1, 1]]; break;
      case "2": template = [[0, 1], [1, 1, 1], [1, 0]]; break;
      case "3": template = [[0, 0], [1, 1, 1], [1, 1]]; break;
      case "4": template = [[1, 0], [0, 1, 0], [1, 1]]; break;
      case "5": template = [[1, 0], [1, 1, 1], [0, 1]]; break;
      case "6": template = [[1, 1], [1, 1, 1], [0, 1]]; break;
      case "7": template = [[0, 0], [1, 0, 0], [1, 1]]; break;
      case "8": template = [[1, 1], [1, 1, 1], [1, 1]]; break;
      case "9": template = [[1, 0], [1, 1, 0], [1, 1]]; break;
      default: template = [];
    }
    return template;
  }

  const numberTemplate = (number) => {
    const template = getTemplate(number);
    return (
      <div className="numberTemplate">
        <div className="numberTemplate_1">
          <div className={`numberTemplate_1_1 ${template[0][0] === 1 ? 'stick_active' : 'stick_inactive'}`} />
          <div className={`numberTemplate_1_2 ${template[0][1] === 1 ? 'stick_active' : 'stick_inactive'}`} />
        </div>
        <div className="numberTemplate_2">
          <div className={`numberTemplate_2_1 ${template[1][0] === 1 ? 'stick_active' : 'stick_inactive'}`} />
          <div className={`numberTemplate_2_2 ${template[1][1] === 1 ? 'stick_active' : 'stick_inactive'}`} />
          <div className={`numberTemplate_2_2 ${template[1][2] === 1 ? 'stick_active' : 'stick_inactive'}`} />
        </div>
        <div className="numberTemplate_3">
          <div className={`numberTemplate_3_1 ${template[2][0] === 1 ? 'stick_active' : 'stick_inactive'}`} />
          <div className={`numberTemplate_3_2 ${template[2][1] === 1 ? 'stick_active' : 'stick_inactive'}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="temp_wrapper">
      <div className="temp_background">
        {numberTemplate(getTime()['days'].toString().charAt(0))}
        {numberTemplate(getTime()['days'].toString().charAt(1))}
        <div className="temp_divier">:</div>
        {numberTemplate(getTime()['hours'].toString().charAt(0))}
        {numberTemplate(getTime()['hours'].toString().charAt(1))}
        <div className="temp_divier">:</div>
        {numberTemplate(getTime()['minutes'].toString().charAt(0))}
        {numberTemplate(getTime()['minutes'].toString().charAt(1))}
        <div className="temp_divier">:</div>
        {numberTemplate(getTime()['seconds'].toString().charAt(0))}
        {numberTemplate(getTime()['seconds'].toString().charAt(1))}
      </div>
    </div>
  );
}

export default Temporizador;