import styles from './styles.module.scss';

export default function Footer() {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Amet iure eius suscipit magni porro, eveniet voluptatum <br />
        incidunt quos debitis labore nihil odit excepturi, quasi <br />
        deleniti accusamus pariatur minus fugit itaque!</p>
      </div>
      <div className={styles.buttons}>
        <button>See my instagram</button>
        <button>Come with me</button>
      </div>
    </div>
    </>
  )
}