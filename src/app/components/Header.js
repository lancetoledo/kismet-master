import React from 'react'
import styles from "../Home.module.css"

function Header() {
    return (
        <div className={styles.header}>
            Kismet
            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Profile</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Your Map</div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Favourites</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Friends</div>

                    </div>

                </nav>

                <div className='flex items-center'>
                    <div className={styles.button}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Header