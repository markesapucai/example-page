import styles from './styles.module.scss';

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>The non-profit organization, Jessica, mentioned on this site, is entirely fictional and does not exist in reality. The goal of this showcase is to demonstrate the creator is skills in web design and content creation.
            For inquiries or to view the creator is real projects, please contact Marktobusiness113@gmail.com .</p>
        </div>
        <div className={styles.buttons}>
          <button>
            <a href="https://github.com/markesapucai">See my GitHub</a>
          </button>
          <button>Come with me</button>
        </div>
      </div>
    </>
  )
}