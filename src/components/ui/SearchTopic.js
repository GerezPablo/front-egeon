import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const SearchTopic = ({ setTopic }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            setTopic(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className="md-form active-purple mb-5">
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder="Search GIPHY"
                />
            </form>
        </div>
    )
}


SearchTopic.propTypes = {
    setTopic: PropTypes.func.isRequired
}