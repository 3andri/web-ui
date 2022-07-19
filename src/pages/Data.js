import config from './../config'
import {  useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from "../component/table";




const Home = () => {

    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:8080/stock/stock-list");
            setData(result.data);
        })();
    }, []);

    const columns = React.useMemo(
        () => [
          {
            Header: 'Code',
            accessor: 'stockcode', 
            Cell: ({ cell: { value } }) => <a href={"stock/"+value} >{value}</a>
            // accessor is the "key" in the data
          },
          {
            Header: 'name',
            accessor: 'stockname',
          }
        ],
        []
    )

    return (
        <div>
             <Table columns={columns} data={data} />
        </div>
    )
}

export default Home