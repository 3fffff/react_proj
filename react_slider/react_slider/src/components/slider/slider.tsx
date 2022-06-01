import { SliderProps } from "./slider.props";
import styles from './slider.module.css'
import { useState } from "react";
import cn from 'classnames';

import Arrow from './image/small-right.svg'

const FADE_DURATION = 300;

export const Slider = ({ reviews }: SliderProps) => {
  const [slide, setSlide] = useState<number>(0)
  const [fadeState, setFadeSlide] = useState<'fade-in' | 'fade-out'>('fade-in')
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>()
  const handlerClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((s) => s + move)
      setFadeSlide('fade-in')
    }, FADE_DURATION)
    clearTimeout(currentTimer)
    setFadeSlide('fade-out')
    setCurrentTimer(timer)
  }
  return <div className={styles.slider}>
    <div className={cn(styles.slide, styles[fadeState])}>
      <div className={styles.left}>
        <div className={styles.text}>{reviews[slide].text}</div>
        <div className={styles.text}>{reviews[slide].name}</div>
      </div>
      <div className={styles.right}
        style={{ backgroundImage: `url(${reviews[slide].image})` }} >

      </div>
    </div>
    {slide > 0 && (<div className={cn(styles.arrow, styles.arrowLeft)} onClick={() => handlerClick(-1)}>
      <div className={styles.imgBox}>
        <img src={Arrow} />
      </div>
    </div>)}
    {slide < (reviews.length - 1) && (<div className={cn(styles.arrow, styles.arrowRight)} onClick={() => handlerClick(1)}>
      <div className={styles.imgBox}>
        <img src={Arrow} />
      </div>
    </div>)}
  </div>
}
