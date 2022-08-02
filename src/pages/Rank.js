import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Table from "../component/table";
import Spinner from '../spinner/spinner';
import axios from 'axios';
import config from './../config';
import Moment from 'moment';

const Rank = () => {
  useEffect(() => {
    setSpin(false)
  }
  )
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(true);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Code',
        accessor: 'stockCode',

      },
      {
        Header: 'percent',
        accessor: 'percentage',
      },
      {
        Header: 'price',
        accessor: 'pricetoday',
      }
    ],
    []
  )
  function getData() {
    //
    (async () => {
      setSpin(true)
      const dates = Moment(startDate).format("yyyy-MM-DD");
      const result = await axios(config.URLHOST + "/stock/stock-rank?date=" + dates);
      setData(result.data);
      setSpin(false)
    })();

  }
  return (
    <div>
      <label> Date :  <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} /></label> &nbsp;
      <label> Type : &nbsp;
        <select >
          <option value="loose">Looser</option>
          <option value="gain">Gainer</option>
        </select>
      </label> &nbsp; &nbsp;
      <button value='data' onClick={getData} >check</button>

      <div>
        {Moment(startDate).format("yyyy-MM-DD")}
      </div>

      <div>
        {spin ? <Spinner /> : <Table columns={columns} data={data} />}
      </div>
    </div>
  )
}

export default Rank