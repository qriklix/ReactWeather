var React = require('react')

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>I'ts {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage
