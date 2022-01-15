import Head from 'next/head'
import Header from '../components/Header'
import DataTable from '../components/DataTable'
import React, { useState, useEffect } from 'react'
import FilterBar from '../components/FilterBar'
import FilterCheckboxList from '../components/FilterCheckboxList'

export default function Home({articles}) {
  
    //register state
    //first argument is the piece of state registered with react
    //the second argument is the function that runs whenever that piece of state changes
    //the argument passed into the "useState" function is the inital value for the 
    //variable that represents that piece of state
    const [data, setData] = useState([]) 
    const [selectedColumns, setSearchColumns] = useState([])
    const [filterText, setFilterText] = useState("")

    //useEffect will get called once the component is "mounted" aka
    //once the component is loaded onto the browser
    // the first argument is what runs each time useEffect is invoked
    //the second argument is an array called the dependency array
    //and is a list of different pieces of state that you want to cause
    //useEffect to run
    useEffect(() => 
    {
      fetch('http://localhost:3002/api/guitar-manufacturers')      
            .then(res=>res.json())
            .then((json) => setData(json)).catch(function(error) {
              alert(error + "\nMake sure the server is running on port 3002 and then try refreshing the page.");
          });
    },[])

    //get the names of the columns in the data table
    const columnNames = data[0] && Object.keys(data[0])

    //function to search through the data passed into rows based on filterText
    function search(rows, filterText){
      
      //set the search columns to be the columnNames initially
      //this is so the filter text applies to all columns
      var searchColumns = columnNames

      //if there are more than one columns selected to filter by
      //set the search colums to only be the ones selected
      if(selectedColumns.length > 0)
      {
        searchColumns = selectedColumns
      }

      //filter through the data based on the selected searchColumns and the filter text
      return rows.filter((row) =>
        searchColumns.some((column) => row[column].toString().toLowerCase().indexOf(filterText.toLowerCase()) > -1)
      ) 
    }

    //update the values of the pieces of state that are passed into child components
    //update filterText based on what is passed back from the FilterBar component
    const getFilterText = (ft) => {
      setFilterText(ft)
    }

    //update the selected columns based on what was passed back from the
    //FilterCheckboxList component
    const getUpdatedFilters = (uf) => {
      setSearchColumns(uf)
    }
    
    
    return (
      <div>
        <Head>
          <title>Griff's Guitar Manufacturers List</title>
          <meta name='keywords' content='guitars, guitar manufacturers'></meta>  
        </Head>

        <Header title={"Guitar Manufacturers"} summary={"Use the search bar below to filter the list of guitar manufacturers"}/>
        
          <FilterBar filterTitle={"Search:"} filterText = {getFilterText}/>
        
          <div><br/></div>
          <FilterCheckboxList columns={columnNames} selectedColumns={selectedColumns} updatedSelection={getUpdatedFilters}/>

        <hr></hr>

        <div>
          <DataTable data={search(data, filterText)}/>
        </div>
        
      </div>
    )
  }