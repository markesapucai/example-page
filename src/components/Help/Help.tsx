import styles from './styles.module.scss';

export default function Help() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>How i can <br />help you?</h2>
        </div>

        <div className={styles.box}>
          <div className={styles.contentBoxSpace}>

            <div className={styles.contentBox}>
              <h4>Overcoming Anxiety and Stress</h4>
              <p>Learn effective strategies to manage and overcome anxiety and stress. Together, we will build resilience, allowing you to face lifes challenges with calm and confidence.</p>
            </div>
            <div className={styles.contentBox}>
              <h4>Navigating Relationship Dynamics</h4>
              <p>Explore healthier relationship patterns and enhance communication skills. Whether its with a partner, family member, or friend, lets work towards fostering meaningful connections.</p>
            </div>
          </div>
          <div className={styles.contentBoxSpace}>

            <div className={styles.contentBox}>
              <h4>Building Resilience in Difficult Times</h4>
              <p>Develop coping mechanisms to navigate lifes ups and downs. Strengthen your resilience and discover the inner resources needed to bounce back from adversity.</p>
            </div>
            <div className={styles.contentBox}>
              <h4>Cultivating a Positive Mindset</h4>
              <p>Transform negative thought patterns and cultivate a positive mindset. Together, well explore techniques to foster self-compassion and optimism for a more fulfilling life</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}