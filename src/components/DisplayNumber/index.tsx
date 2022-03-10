// 08/03/22

import styles from './DisplayNumber.module.css'

interface DisplayNumberProps {
  numero: number
}

export default function DisplayNumber(props: DisplayNumberProps) {

  console.log(props?.numero ?? 99)

  return (
    <div className={styles.quadro} >
      {props?.numero ?? 99}
    </div>
  )
}
