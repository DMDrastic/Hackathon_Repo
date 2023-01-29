import React from 'react'
import styles from './footer.module.css'

export default function home(){
    return(
        <div>
            <div id="nav" className={styles.navWrapper}>
                <div className={styles.holder}>
                <a href='#' className={styles.icon}>
                <i className="fa-solid fa-arrow-left"></i>
                </a>
                <a href='#' className={styles.icon}>
                <i className="fa-solid fa-arrow-right"></i>
                </a>
                </div>   
            </div>
         </div>
    )
}