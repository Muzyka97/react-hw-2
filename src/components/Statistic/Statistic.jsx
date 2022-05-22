import React from 'react';
import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({good,neutral,bad,total,goodprst} ) => {
    return(
        <div className={styles.statistic}>
            <p className={styles.element}>Good: {good}</p>
            <p className={styles.element}>Neutral: {neutral}</p>
            <p className={styles.element}>Bad: {bad}</p>  
            <p className={styles.element}>Total: {total}</p>
            <span className={styles.element}>Positive feedback:{goodprst}%</span>     
        </div>
        
    )
};
export default Statistic;

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    goodprst: PropTypes.number.isRequired,
};
