import React from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Fild from '../Fild/Fild'

const Converter = () => {
    const dispatch = useDispatch()
    const currency = useSelector(state => state)

    const handleUsdChange = (e) => {
        const value = e.target.value.replace(/[^\d.,]/g, '').replace(/,/g, '.');
        dispatch({type: 'USD', payload: value})
        dispatch({type: 'EUR', payload: value ? (value * (1/(1.07/1))).toFixed(2) : ''})
      }

      const handleEurChange = (e) => {
        const value = e.target.value.replace(/[^\d.,]/g, '').replace(/,/g, '.');
        dispatch({type: 'EUR', payload: value})
        dispatch({type: 'USD', payload: value ? (value * 1.07).toFixed(2) : ''})
      }

  return (
    <main className={style.converter}>
        <div className={style.converter__filds}>
            <Fild name="usd" currency={currency.usd} handleChange={handleUsdChange} />
            <Fild name="eur" currency={currency.eur} handleChange={handleEurChange} />
        </div>
    </main>
  )
}

export default Converter