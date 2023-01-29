import React from 'react'
import styles from './home.module.css'
import Img from './Img'

export default function home(){
    return(
        <div className={styles.main}>
            <div id="nav" className={styles.navWrapper}>
                <div className={styles.holderH}>
                <a href='#' className={styles.iconH}>
                <i className="fa-light fa-igloo"></i>
                </a>
                </div>
                <div className={styles.holderP}>
                <a href='#' className={styles.iconP}>
                <i className="fa-regular fa-user"></i>
                </a>
                </div>
                
            </div>

            <div>
                <section id="clubs">
                    <div className={styles.wrapper}>
                        <div className={styles.sectionContent}>
                            <Img 
                            title={"CLUB 1"}
                            link={"#"}
                            >
                            </Img>
                            
                        </div>
                        <div className={styles.sectionContent}>
                            <Img 
                            title={"CLUB 1"}
                            link={"#"}
                            >
                            </Img>
                            
                        </div>
                        <div className={styles.sectionContent}>
                            <Img 
                            title={"CLUB 1"}
                            link={"#"}
                            >
                            </Img>
                            
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
    )
}