import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const SearchBar = ({ setTopic }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            const finalInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            setTopic(finalInput);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="md-form active-purple mb-5" style={{'width':'30vw', 'marginLeft':'1vw'}}>
                <input 
                className="form-control" 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Search GIPHY" 
                aria-label="Search" />
            </div>
        </form>
    )
}


SearchBar.propTypes = {
    setTopic: PropTypes.func.isRequired
}