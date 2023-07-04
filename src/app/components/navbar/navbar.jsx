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
        <li className={styles.navItem}><Link href='/about-us'>About</Link></li>
        <li className={styles.navItem}><Link href='/dashboard'>Dashboard</Link></li>
        <li className={styles.navItem}><Link href='/blogs'>Blogs</Link></li>
        <li className={styles.navItem}><Link href='/'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar