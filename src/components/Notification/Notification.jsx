import styles from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return <p className={styles.massage}>{message}</p>
};
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
