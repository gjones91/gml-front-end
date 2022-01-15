import React, { useState, useEffect} from 'react'
import barStyles from '../styles/FilterBar.module.css'

const FilterBar = (props) => {

    //register the text entered into the input bar as state
    const [filterText, setFilterText] = useState("")

    //boolean value output directly from the conditional statement
    const shouldDisplayButton = filterText.length > 0

    //when the button is clicked, clear the search bar
    const handleClearClick = () => {
        setFilterText("")
    }

    //pass the value of the filterText back to the parent component
    //this is wrapped in a use effect hook to remove the following warning:
    /*
    Warning: Cannot update a component (`Home`) while rendering a different component
    (`FilterBar`)...
    */
    useEffect(() => {
        props.filterText(filterText)
    }, [filterText])

    return(
        <div>
            <h3 className={barStyles.text}>{props.filterTitle}</h3>
            <input className={barStyles.bar} type="text" value={filterText} onChange={(event) => setFilterText(event.target.value)} />
            {shouldDisplayButton &&
                <button className={barStyles.button} onClick={handleClearClick}>Clear</button>
            }
        </div>
    )

}

export default FilterBar