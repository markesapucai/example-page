import styles from './styles.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <Image
            src="/assets/buswomark.png"
            alt="Loogo"
            height={350}
            width={350} />
        </div>
        <div className={styles.content}>
          <h2>About osichr</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Unde, eos iste? Voluptatum id, molestias exercitationem fugiat <br />
            libero, similique ipsa vitae dicta quaerat rerum dolores eum <br /> assumenda
            soluta impedit praesentium perspiciatis.</p>
        </div>
      </div>
    </>
  )
}