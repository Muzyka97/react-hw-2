import React from 'react';
import styles from './Feedback.module.css';

import FeedBackOptions from './FeedBackOptions';
import Statistic from 'components/Statistic/Statistic';
import Notification from 'components/Notification';
import Section from '../Section';

const options =["good", "neutral", "bad"];

class FeedBack extends React.Component{
    state ={
        good:0,
        neutral:0,
        bad:0,
    };
    handleClickOnGood = (propertyName) =>{
        this.setState(prevState => {
            return {
                [propertyName]: prevState[propertyName] +1
            }
        })
        console.log(this)
    }
    countTotalFeedback(){
        const {good, neutral, bad}= this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage(){
        const total = this.countTotalFeedback()
        const goodprst = this.state.good / total * 100
        return Math.round( goodprst * 100) / 100
    }
    render(){
        const { good, neutral, bad } = this.state;
        const { handleClickOnGood } = this;
        
        const total = this.countTotalFeedback()
        const goodprst = this.countPositiveFeedbackPercentage()

        return(
            <div className={styles.feedBack}>
                <Section title="Please leave feedback">
                    <FeedBackOptions options={options} onLeaveFeedback={handleClickOnGood}/>
                </Section>
                <Section title="Statistic">
                    {total >0 ? <Statistic good={good} neutral={neutral} bad={bad} total={total} goodprst={goodprst} />:<Notification message="No feedback given"/>}
                </Section>
            </div>           
        )
    }
};
export default FeedBack;