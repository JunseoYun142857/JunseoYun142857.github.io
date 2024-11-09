// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // 스타일 추가 가능

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.texts}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
      </div>

    </nav>
  );
};

export default Navbar;
