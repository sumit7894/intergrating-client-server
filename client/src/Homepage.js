import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Homepage = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        fetchApi();
        // eslint-disable-next-line
    },[]);
    const fetchApi = async ()=>{
        const response =  await axios.get('https://client-server-integration.onrender.com/api/health');
        setData(response);
    }
    console.log(data);
  return (
    <div>Homepage<br/>
    {data.data.message}
    </div>
  )
}

export default Homepage