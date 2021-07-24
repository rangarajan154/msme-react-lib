import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, shape }) => {
  return (
    <div className={styles.test}>
      Am changing my library.......... Example Component: {text}, {shape}
    </div>
  )
}
