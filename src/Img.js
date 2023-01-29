import React from 'react'
import styles from './img.module.css'


export default function Img(props) {
    const {title, link} = props
    return (
        <div className={styles.imgDisplay}>    
                <h2 className={styles.header}>{title.toUpperCase()}</h2>    
                <div className={styles.links}>
                    <a href={link} rel="noreferrer" target="_blank" className={styles.button}><i className={styles.tab}>
                    </i></a>
                </div>           
        </div>
    )
}
