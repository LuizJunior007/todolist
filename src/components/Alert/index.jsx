const Alert = ({ msg }) => {

    return(
        <div className={`alert ${msg.status === 'error' ? 'alert-danger' : 'alert-success'}`}  role="alert">
            {msg.text}
        </div>
    );

}

export default Alert;