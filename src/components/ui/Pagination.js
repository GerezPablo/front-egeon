import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


export const Pagination = ({ page, setPage }) => {
 

    const incrementPage = ()  => {
        setPage( ++page );
    }
    
    const decrementPage = ()  => {
        if(page > 1) {
            setPage( --page );
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page]);
      

    return (
        <nav aria-label="..." style={{'marginLeft':'2vw'}}>
            <ul className="pagination ">
                <li className="page-item blue">
                    <a 
                        className="page-link" 
                        onClick={decrementPage}
                    >
                    Previous</a>
                </li>
                
                <li className="page-item blue">
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