import React from 'react';
import styles from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({title, children })=>{
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </div>
    )
}
export default Section;

Section.propTypes ={
    title: PropTypes.string,
}
