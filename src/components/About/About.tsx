import styles from './styles.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <Image
            src="/assets/psicoAgianpreview.png"
            alt="Loogo"
            height={350}
            width={350} />
        </div>
        <div className={styles.content}>
          <h2>Meet Jessica: Your Ally on the Path to Personal Growth</h2>
          <p>Hey there! I am Jessica, a psychologist in my 30s who finds joy in hiking, exploring books, and cherishing moments with my close family. These personal experiences have deepened my appreciation for human connections. <br /> <br />
            In our sessions, I blend evidence-based practices with a personal touch. Whether you are navigating relationships, building resilience, or seeking a positive mindset, I am here for you. Let is embark on this journey together, where self-discovery meets genuine connection. Excited to be a part of your story.</p>
        </div>
      </div>
    </>
  )
}