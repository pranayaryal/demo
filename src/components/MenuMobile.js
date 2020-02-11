import React from 'react'
import styles from './MenuMobile.module.scss';

const MenuMobile = props => {
    return (
    <div className={styles.container}>

      <div className={styles.wrapper}>
        <div className={styles.menuItem}>Our Work</div>
        <div className={styles.menuItem}>Our Services</div>
        <div className={styles.menuItem}>Company</div>
        <div className={styles.menuItem}>Contact</div>
      </div>
      
    </div>
  )
};

export default MenuMobile;