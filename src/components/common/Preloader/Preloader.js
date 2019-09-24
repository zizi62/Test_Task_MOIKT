import React from 'react'
import styles from './Preloader.module.css'

import preloader from '../../../asses/preloader.svg'

let Preloader = () => {
    return (
        <div  className = {styles.preloader}>
        <div className = {styles.preloaderBox}>
            <img className = {styles.preloaderImg}src={preloader} alt='preloader' />
        </div>
        </div>

    )
}

export default Preloader;