import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import Sidebar from '../Sidebar';
import Map from '../Map/index';
import { fetchData } from '../../utils';


const App: React.FC = () => {

  const [data, setData] = useState([])
  const [selected, setSelected] = useState("")

  useEffect(() => {
    fetchData().then(res => setData(res))
  }, [])

  const handleSelect = (selectedId:string):void => {
    setSelected(selectedId)
  }

  return (
    <div className={styles.container}>
      <Sidebar data={data} handleSelect={handleSelect} /> 
       <Map data={data} selected={selected} />
    </div>
  );
}

export default App;
