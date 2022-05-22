import React from "react";
import styles from './FeedBackOptions.module.css'
import PropTypes from 'prop-types'

const FeedBackOptions =({options=[], onLeaveFeedback})=>{
    const elements = options.map((option, index) => (
        <p key={index}><button className={styles.btn} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button></p>
    ))
    return(
        <div className={styles.feedBackButton}>
            {elements}
        </div>
    )
};
export default FeedBackOptions;

FeedBackOptions.protoType = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}
