import P from 'prop-types';

const Title = ({ title }) => {

    return(
        <h3>{title}</h3>
    );

}

Title.propTypes = {

    title: P.string.isRequired

}

export default Title;