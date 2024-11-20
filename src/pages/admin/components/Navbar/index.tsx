import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navBrand}>
        <h1>Admin Dashboard</h1>
      </div>
      <div className={styles.navLinks}>
        <Link href="/admin/events">
          <a className={styles.navLink}>Events</a>
        </Link>
        <Link href="/admin/coupons">
          <a className={styles.navLink}>Coupons</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
