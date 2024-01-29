import styles from './styles.module.scss';
import Image from 'next/image';

export default function Apresentation() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.textAp}>
            <h1>Resonate with the <br /> visitorss problem</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ipsam voluptas vitae soluta</h3>
            <button className={styles.getStart}>Get start</button>
          </div>

          <div className={styles.imgAp}>
            <div className={styles.background}></div>
            <div className={styles.overlay}>
              <Image
                src="/assets/psicoPNG.png"
                alt="Logo"
                height={350}
                width={350}
              />
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div>
            <h3>Lorem ipsum </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
          </div>
        </div>
      </div>
    </>
  )
}