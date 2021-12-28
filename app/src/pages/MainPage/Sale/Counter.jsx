import React from 'react'

const getTimeValue = data => {
  return {
    first: data.toString().length > 1 ? data.toString().split('')[0] : '0',
    second:
      data.toString().length > 1
        ? data.toString().split('')[1]
        : data.toString().split('')[0]
  }
}

const DateContainer = ({ title }) => {
  return (
    <a href="#">
      <div className="up">
        <div className="shadow" />
        <div className="inn">{title}</div>
      </div>
      <div className="down">
        <div className="shadow" />
        <div className="inn">{title}</div>
      </div>
    </a>
  )
}

export const Counter = ({ days, hours, minutes, seconds }) => {
  const dayFirst = getTimeValue(days).first
  const daySecond = getTimeValue(days).second
  const hourFirst = getTimeValue(hours).first
  const hourSecond = getTimeValue(hours).second
  const minuteFirst = getTimeValue(minutes).first
  const minuteSecond = getTimeValue(minutes).second
  const secondFirst = getTimeValue(seconds).first
  const secondSecond = getTimeValue(seconds).second

  let counterData = {
    Days: {
      first: dayFirst,
      second: daySecond
    },
    Hours: {
      first: hourFirst,
      second: hourSecond
    },
    Minutes: {
      first: minuteFirst,
      second: minuteSecond
    },
    Seconds: {
      first: secondFirst,
      second: secondSecond
    }
  }

  const renderedData = Object.keys(counterData).map(key => {
    return (
      <React.Fragment key={key}>
        <span className="flip-clock-divider">
          <span className="flip-clock-label">{key}</span>
        </span>
        <ul className="flip">
          <li className="flip-clock-before">
            <DateContainer title={counterData[key].first} />
          </li>
          <li className="flip-clock-active">
            <DateContainer title={counterData[key].first} />
          </li>
        </ul>
        <ul className="flip">
          <li className="flip-clock-before">
            <DateContainer title={counterData[key].second} />
          </li>
          <li className="flip-clock-active">
            <DateContainer title={counterData[key].second} />
          </li>
        </ul>
      </React.Fragment>
    )
  })

  return (
    <div className="clock ml-0 mt-5 d-flex justify-content-center flip-clock-wrapper">
      {renderedData}
    </div>
  )
}
