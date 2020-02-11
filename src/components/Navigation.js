import React from 'react'
import styles from './Navigation.module.scss';

const Navigation = props => {
    return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p>Pranay Aryal Co</p>

        </div>
        <div className={styles.rightNav}>
          <p>Right nav</p>
        </div>
        <div className={styles.burger}>
          <div className={styles.burgerLines} onClick={console.log('hi')}>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navigation;