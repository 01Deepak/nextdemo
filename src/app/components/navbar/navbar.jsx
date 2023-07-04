import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
         <Link href='/home'>Home</Link> 
          </li>
        <li className={styles.navItem}><Link href='/counter-with-globle-state'>Globle State</Link></li>
        <li className={styles.navItem}><Link href='/blogs'>Blogs</Link></li>
        <li className={styles.navItem}><Link href='/'>Login</Link></li>
        <li className={styles.navItem}><Link href='/users'>Users</Link></li>
        <li className={styles.navItem}><Link href='/counter'>Counter</Link></li>

      </ul>
    </div>
  )
}

export default Navbar