var React = require('react')

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">I'ts {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage
