import React from 'react';
import PropTypes from 'prop-types';


export const Pagination = ({page, setPage}) => {

    const incrementPage = ()  => {
        setPage( ++page );
        console.log(page);
    }
    
    const decrementPage = ()  => {
        if(page > 1) {
            setPage( --page );
            console.log(page);
        }
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item grey">
                    <a 
                        className="page-link" 
                        onClick={decrementPage}
                    >
                    Previous</a>
                </li>
                
                <li className="page-item grey">
                    <a 
                        className="page-link" 
                        onClick={incrementPage}
                    >
                    Next</a>
                </li>
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    setPage: PropTypes.func.isRequired
}