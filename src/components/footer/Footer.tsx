import styled from 'styled-components'
import type { IStyledProps } from '../Icon/Icon'
import { useEffect, useState } from 'react'

const FooterContainer = ({ className }: IStyledProps) => {
  const [weaterData, setWeaterData] = useState('')

  const key = '98307459efa27dfff9f2c0c760bebc25'
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${'nizhnevartovsk'}&lang=ru&units=metric&appid=${key}`

  const getWeather = async () => {
    try {
      const response = await fetch(WEATHER_URL)
      const data = await response.json()
      setWeaterData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className={className}>
      <div>
        <div>BLOG</div>
        <div>123123@gmail.com</div>
      </div>

      {weaterData && (
        <div>
          <div>
            {weaterData.name}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
          </div>
          <div>
            {Math.round(weaterData.main.temp)} градусов, {weaterData.weather[0].description}
          </div>
        </div>
      )}
    </div>
  )
}

const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: pink;

  font-weight: bold;

  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  /* background-color: #fff; */
  box-shadow: 0px 2px 17px #000;
`

export default Footer
