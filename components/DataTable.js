import React from 'react'


const DataTable = ({data}) => {
    
    //get the names of the columns for the table from the data passed in
    const columnNames = data[0] && Object.keys(data[0])

    //returns the data passed in as a table
    return(
        <div>
        <table>
            <thead>
                <tr>
                    {data[0] && columnNames.map((heading) => <th key={heading}>{heading}</th>)}
                </tr>
            </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={Math.random().toString()}> 
                            {columnNames.map((column) => (
                                <td key={row[column]}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            
        </table>
        </div>
    )
}

export default DataTable