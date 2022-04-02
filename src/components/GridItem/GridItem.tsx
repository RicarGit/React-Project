import up from '../../assets/up.png'
import down from '../../assets/down.png'
import styles from './GridItem.module.css'
import LeftArrowReset from '../ResetArrow/LeftArrowReset'
import { Level } from '../../helpers/imc'

//Setting the tipes to any for now until i find proper type for it
type Props = {
  item: Level,
  setToShow?: any,
  setHeight?: any,
  setWeight?: any
}

function GridItem({ item, setToShow, setHeight, setWeight }: Props) {
  const { title, backgroundColor, icon, imc, imcResult } = item
  const [minImcValue, maxImcValue] = imc

  return (
    <div className={styles.boxItem} style={{ backgroundColor }}>
      <figure className={imcResult ? styles.boxThumbIconBigger : styles.boxThumbIcon}>
        <img className={imcResult ? styles.thumbIconBigger : styles.thumbIcon} src={icon === 'up' ? up : down} alt="thumbs_image" />
      </figure>
      <h2 className={imcResult ? styles.boxTitleBigger : styles.boxTitle}>{title}</h2>
      {imcResult
        ? <p className={styles.boxTextBigger}>O valor do seu IMC é: <strong>{imcResult} Kg/m²</strong></p>
        : <p className={styles.boxText}>IMC está entre <strong>{minImcValue}</strong> e <strong>{maxImcValue}</strong></p>
      }
      {imcResult && <LeftArrowReset item={item} setToShow={setToShow} setHeight={setHeight} setWeight={setWeight} />}
    </div>
  )
}

export default GridItem