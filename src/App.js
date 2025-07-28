import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
function App() {
  const [res, setRes] = useState()

  const  fetchData = async()=>{
    const data = await axios.get(process.env.REACT_APP_BACKEND)
    console.log("this is the response", data)
    setRes(data.data.msg)
  }

  useEffect(()=>{
fetchData()
  }, [])
  return (
  <><h1>{res}</h1></>
  );
}

export default App;
