import P from 'prop-types';

const Alert = ({ msg }) => {

    return(
        <div className={`alert ${msg.status === 'error' ? 'alert-danger' : 'alert-success'}`}  role="alert">
            {msg.text}
        </div>
    );

}

Alert.propTypes = {
    msg: P.string.isRequired
}

export default Alert;