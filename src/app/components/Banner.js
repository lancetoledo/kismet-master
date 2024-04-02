import React from 'react'
import FindFlights from './FindFlights'
import styles from "../Home.module.css"

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.textWrapper}>
                <div className={styles.headline}>Explore New Places</div>
                <div className={styles.slogin}>Go where you are meant to be</div>
            </div>
            <div className={styles.flightsWrapper}>
                <div className={styles.select}>Flights</div>
                <div className={styles.flightsInfo}>
                    <FindFlights />
                </div>
            </div>
        </div>
    )
}

export default Banner