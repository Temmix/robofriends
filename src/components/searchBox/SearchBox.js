import React from 'react';

const searchBox = ({searchChanged}) => {
    return (
        <div className='pa2'>
            <input 
            aria-label='Search Robots'
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robofriends' 
            onChange={searchChanged}
            />
        </div>
    )
}

export default searchBox;