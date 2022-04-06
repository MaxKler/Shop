import React from 'react'

import classes from './../../src/style/style.module.scss'

import LogoPng from './../img/logo.png'
import CartSvg from './../img/cart.svg'
import UserSvg from './../img/user.svg'
import PlusSvg from './../img/plus.svg'
import Shoes from './../img/shoes/shoes1.png'

const Main = () => {
  return (
    <div className={classes.wrapper}>
      <header > 
        <div className={classes.headerLeft}>
          <img width={40} height={40} src={LogoPng} alt='' />
          <div >
            <h3>React  Shop</h3>
            <p>Наш лучший магазин</p>
          </div>
        </div>
        <ul className={classes.headerRight}>
          <li>
            <img src={CartSvg} alt='' width={18} height={18} />
            <span>1420 грн.</span>
          </li>
          <li>
          <img src={UserSvg} alt='' width={18} height={18} />
          </li>
        </ul>
      </header> 
      <div className={classes.content}>
        <h1>Все кроссовки</h1>
        <div className={classes.shoes}>
          <div className={classes.card}>
            <img width={133} height={112} src={Shoes} alt='' />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className={classes.card__body}>
              <div className={classes.card__info}>
                <span>Цена:</span>
                <b>6999 грн.</b>
              </div>
              <button className={classes.card__button}>
                <img src={PlusSvg} alt='' width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main

