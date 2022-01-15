import React, { useState, useEffect } from 'react'
import filterListStyles from '../styles/FilterCheckboxList.module.css'

const FilterCheckboxList = (props) => {

    //resiter the selected filter boxes as pieces of state
    const [selectedColumns, setSearchColumns] = useState([])

    //passes the selected filters back to the parent component
    //this is wrapped in a use effect hook to remove the following warning:
    /*
    Warning: Cannot update a component (`Home`) while rendering a different component
    (`FilterCheckboxList`)...
    */
    useEffect(() => {
        props.updatedSelection(selectedColumns)
    }, [selectedColumns])

    return(
        <div>
            Filters:
            { props.columns && props.columns.map((column) => 
                <label className={filterListStyles.checkboxes} key={column}>
                    
                    <input
                        type="checkbox"
                        checked={props.selectedColumns.includes(column)}
                        onChange={(e) => {
                            const checked = props.selectedColumns.includes(column)
                            setSearchColumns(prev => checked ? prev.filter(sc => sc !== column) : [...prev, column])
                        }} 
                    /> 
                    
                    {column}
                    {"  "}
                </label>)
            }
        
        </div>

    )

}

export default FilterCheckboxList