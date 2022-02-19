import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../index';
import holiday from '../holidays/holiday';

import '../../lib/styles/calendar.css';
import './pages/exampleCalendar.scss';

const node = document.getElementById('app');

const ProductionCalendar = () => {

  let [ dayWeek, setDayWeek ] = useState(1);

  const changeDayWeek = () => {
    setDayWeek(prevVal => {
      return prevVal == 1 ? 0 : 1
    });
  }

  return (
    <div className = 'exampleCalendar'>
      <h2>Календарь на 2022 год</h2>
      <button className = 'mdc-button' onClick = { changeDayWeek }>Изменить начальный день недели</button>
      <div className = 'exampleCalendar-group'>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '1' holiday = { holiday } startDayWeek = { dayWeek } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '2' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '3' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '4' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '5' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '6' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '7' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '8' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '9' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '10' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '11' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
        <div className = 'exampleCalendar-item'>
          <Calendar visibleYear = { false } year = '2022' month = '12' holiday = { holiday } startDayWeek = { dayWeek } />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <ProductionCalendar />,
  node
)