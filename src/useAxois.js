import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  async function addData(endpoint) {
      const res = await axios.get(`${baseUrl}${endpoint}`)
    setData(data => [...data, {...res.data, id: uuid()}]);
  };

  const removeData = () => {
      setData([]);
  }
  
  return [data, addData, removeData];
}

export default useAxios;