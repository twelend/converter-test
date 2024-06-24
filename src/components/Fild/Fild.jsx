import React from 'react'
import style from '../Converter/style.module.css'

const Fild = ({ name, currency, handleChange }) => {

  return (
    <>
      <div className={style.filds__input}>
          <label htmlFor={name}>{name}</label>
          <input name={name} type="number" placeholder='0' value={currency} onChange={handleChange}/>
      </div>
    </>
  )
}

export default Fild