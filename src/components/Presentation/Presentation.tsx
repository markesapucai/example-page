import styles from './styles.module.scss';
import Image from 'next/image';

export default function Apresentation() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.textAp}>
            <h1>Discover Emotional Well <br />being and Flourish with</h1>
            <h3>Your Path to Healing, Resilience, and a Fulfilling Life Starts Here <br />
            – A Compassionate Guide for Overcoming Challenges and <br />
            Cultivating Lasting Joy</h3>
            <button className={styles.getStart}>Get start</button>
          </div>


          <div className={styles.overlay}>
            <Image
              src="/assets/psicoFind.png"
              alt="Logo"
              height={350}
              width={350}
            />
          </div>

        </div>
        <div className={styles.line}>
          <div>
            <h3>Calmness </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Empowerment </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Joyful Living</h3>
          </div>
        </div>
      </div>
    </>
  )
}