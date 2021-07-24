import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, shape }) => {
  return (
    <div className={styles.test}>
      Example Component: {text}, {shape}
    </div>
  )
}
