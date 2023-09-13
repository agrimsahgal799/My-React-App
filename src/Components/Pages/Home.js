import React, { useState, useEffect } from 'react'

function Home() {
  const url = "https://jsonplaceholder.typicode.com/users";

  // hook variable
  const [data, setData] = useState([]);

  const fetchInfo = async ()=>{
    const res = await fetch(url);
    const d = await res.json();
    return setData(d);
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  
  return (
    
    <div className="container base-container">
      <h1>Home</h1>
    </div>
  )
}

export default Home;
