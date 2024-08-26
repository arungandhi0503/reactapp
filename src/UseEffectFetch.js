import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectFetch() {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res)
        setFetchData(res.data);
      })
      .catch((err) => { console.log(err, "err") })
  }, []);
  return (
    <div>UseEffect Fetch API GET
      <div>{fetchData.map((item) => {
        return (<li key={item.id}>{item.title}</li>);
      })}</div>
    </div>
  )
}

export default UseEffectFetch