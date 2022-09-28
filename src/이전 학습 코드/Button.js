import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, event }) {
    return (
        <button className={styles.btn} onClick={event}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: propTypes.string.isRequired,
};

export default Button;
