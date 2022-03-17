// How to Code Resizable Split Panels in React
// https://www.youtube.com/watch?v=P6rNIDnejsg
// https://github.com/nathancahill/split
// 16/03/22

import React from 'react'
import Split from 'react-split'
import styles from '../styles/Split.module.css'

export default function Split1() {
  return (

    <Split
      direction='vertical'
      sizes={[30, 70]}
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <Split
        className={styles.flex}
        sizes={[20,80]}
        minSize={[10,30]}
      >
        <div className={styles.teste1}>Split1</div>
        <div className={styles.teste1}>Split2</div>

      </Split>

      <div className={styles.teste2}>Split3</div>

    </Split>
  )
}
