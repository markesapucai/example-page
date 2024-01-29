import styles from './styles.module.scss';

export default function Help() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>How i can help u?</h2>
        </div>
        
        <div className={styles.box}>
          <div className={styles.contentBoxSpace}>

            <div className={styles.contentBox}>
              <h4>lorem Ipsum</h4>
              <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />
                Non totam necessitatibus perferendis<br /> debitis provident maiores <br /></p>
            </div>
            <div className={styles.contentBox}>
            <h4>lorem Ipsum</h4>
              <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />
                Non totam necessitatibus perferendis<br /> debitis provident maiores <br /></p>
            </div>
          </div>
          <div className={styles.contentBoxSpace}>

            <div className={styles.contentBox}>
              <h4>lorem Ipsum</h4>
              <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />
                Non totam necessitatibus perferendis<br /> debitis provident maiores <br /></p>
            </div>
            <div className={styles.contentBox}>
            <h4>lorem Ipsum</h4>
              <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />
                Non totam necessitatibus perferendis<br /> debitis provident maiores <br /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}