import styles from './styles.module.scss';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <nav>
        <div className={styles.logo}>
        <a href="#">LOGO</a>
        </div>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
