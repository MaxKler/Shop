import React from 'react'

import classes from './../../src/style/style.module.scss'

import cancelSvg from './../img/cancel.svg'
import LogoPng from './../img/logo.png'
import CartSvg from './../img/cart.svg'
import UserSvg from './../img/user.svg'
import PlusSvg from './../img/plus.svg'
import arrowR from './../img/arrowRight.svg'
import SearchSvg from './../img/search.svg'
import UnLikedSvg from './../img/heartUnLiked.svg'
import Shoes from './../img/shoes/shoes1.png'

const Main = () => {
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay}>
        <div className={classes.drawer}>
          <h2>Корзина
          <img className={classes.cartItem__cancelBtn} src={cancelSvg} alt='' />
          </h2>
          <div className={classes.drawer__items}>
            <div className={classes.cartItem}>
              <img className={classes.cartItem__shoes} width={70} height={70} src={Shoes} alt='' />
              <div className={classes.cartItem__info}>
                 <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                 <b>5999 грн.</b>
               </div>
              <img className={classes.cartItem__cancelBtn} src={cancelSvg} alt='' />
            </div>
            <div className={classes.cartItem}>
              <img className={classes.cartItem__shoes} width={70} height={70} src={Shoes} alt='' />
              <div className={classes.cartItem__info}>
                 <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                 <b>5999 грн.</b>
               </div>
              <img className={classes.cartItem__cancelBtn} src={cancelSvg} alt='' />
            </div>
            <div className={classes.cartItem}>
              <img className={classes.cartItem__shoes} width={70} height={70} src={Shoes} alt='' />
              <div className={classes.cartItem__info}>
                 <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                 <b>5999 грн.</b>
               </div>
              <img className={classes.cartItem__cancelBtn} src={cancelSvg} alt='' />
            </div>
          </div>
          <div className={classes.drawer__dawn}>
            <ul >
              <li>
                <span>Итого:</span>
                <div></div>
                <b>14056 грн.</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1245 грн.</b>
              </li>
            </ul>
            <button className={classes.greenBtn}>Оформить заказ 
              <img src={arrowR} alt='' />
            </button>
          </div>
        </div>
      </div>
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
        <div className={classes.search__block}>
          <h1>Все кроссовки</h1>
          <div className={classes.search__block__search}>
            <img src={SearchSvg} alt='' />
            <input placeholder='Поиск...' /> 
          </div>
        </div>
        
        <div className={classes.card}>
          <div className={classes.card__card}>
            <div className={classes.card__favorite}>
               <img src={UnLikedSvg} alt='' />
            </div>
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

