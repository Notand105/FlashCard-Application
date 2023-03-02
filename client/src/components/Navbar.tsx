import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav} >
      <ul className={styles.list} >
        <li><Link className={styles.link} to="/">Homepage</Link></li>
        <li><Link className={styles.link} to='/flashcards' >FlashCards</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
