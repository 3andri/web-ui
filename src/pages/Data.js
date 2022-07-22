import config from './../config'
import {  useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from "../component/table";
import Spinner from '../spinner/spinner';




const Home = () => {

    const [data, setData] = useState([]);
    const [spin, setSpin] = useState(true);


    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            setSpin(true)
            const result = await axios(config.URLHOST+"/stock/stock-list");
            setData(result.data);
            setSpin(false)
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
          {spin? <Spinner /> : <Table columns={columns} data={data} />}
             
        </div>
    )
}

export default Home