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
            setTopic(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div class="md-form active-purple mb-5" style={{'width':'30vw', 'marginLeft':'1vw'}}>
                <input 
                class="form-control" 
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