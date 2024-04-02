import React from 'react'
import styles from "../Home.module.css"
import { MdOutlineLocationOn } from 'react-icons/md'
import { MdOutlineCardTravel } from 'react-icons/md'
import { IoMdGlobe } from 'react-icons/io'
import { FaCalendarAlt } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'

function FindFlights() {
    return (
        <>
            <div className={styles.inputContainer}>
                <MdOutlineCardTravel className={styles.icon} />
                <div className={styles.inputTitle}>
                    <div className='text-sm'>Origin</div>
                    <input className={styles.inputField} placeholder="Newark Airport" type="text" />
                </div>
            </div>

            <div className={styles.inputContainer}>
                <MdOutlineLocationOn className={styles.icon} />
                <div className={styles.inputTitle}>
                    <div className='text-sm'>Destination</div>
                    <input className={styles.inputField} placeholder="Haneda Airport" type="text" />
                </div>
            </div>

            <div className={styles.dateContainer}>
                <div className={styles.dateTitle}>
                    <div className='text-sm'>Depart Date</div>
                    <div className={styles.dateField}>
                        April, 17th
                        <FaCalendarAlt className={styles.calendar} />
                    </div>
                </div>
            </div>

            <div className={styles.dateContainer}>
                <div className={styles.dateTitle}>
                    <div className='text-sm'>Return Date</div>
                    <div className={styles.dateField}>
                        Dec, 24th
                        <FaCalendarAlt className={styles.calendar} />
                    </div>
                </div>
            </div>

            <div className={styles.passengerContainer}>
                <div className={styles.passengerTitle}>
                    <div className='text-sm'>Passengers/Class</div>
                    <div className={styles.passengerField}>
                        <div>
                            <p className='text-sm'>2 passengers</p>
                            <p className='text-xs'>coach/economy</p>
                        </div>
                        <RiArrowDropDownLine className={styles.dropDown} />
                    </div>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.searchBtn}>
                    Search
                </div>
            </div>
        </>

    )
}

export default FindFlights