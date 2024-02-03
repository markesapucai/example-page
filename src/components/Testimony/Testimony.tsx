import styles from './styles.module.scss';

export default function Testimony() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Hear What Others Have Experienced</h1>
          <h3>Discover the Impact of Jessica is Guidance on Personal Growth</h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Working with Jessica has been transformative. Her empathetic approach and insightful guidance helped me navigate a challenging period in my life. I now feel more resilient and in control.</p>
            <div className={styles.people}>
              <h5>Maria</h5>
              <h6>28 years old</h6>
            </div>
          </div>

          <div className={styles.card}>
            <p>I am grateful for the positive changes in my mindset and relationships since starting sessions with Jessica. Her practical strategies and compassionate support have made a significant difference.</p>
            <div className={styles.people}>
              <h5>James</h5>
              <h6>35 years old</h6>
            </div>
          </div>

          <div className={styles.card}>
            <p>Jessica created a safe space where I felt heard and understood. Through our sessions, I have gained valuable tools to manage stress and build healthier connections. Her impact on my well-being has been profound.</p>
            <div className={styles.people}>
              <h5>Sarah</h5>
              <h6>42 years old</h6>
            </div>
          </div>

          <div className={styles.card}>
            <p>Choosing Jessica as my guide was the best decision. Her holistic approach has helped me not only overcome challenges but also discover a deeper sense of self-awareness and fulfillment.</p>
            <div className={styles.people}>
              <h5>Alex</h5>
              <h6>31 years old</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}