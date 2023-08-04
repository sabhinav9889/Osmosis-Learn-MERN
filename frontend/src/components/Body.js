import React, { useEffect, useState } from "react"
import './Body.css';

import List from './List'
const Body = () => {


  const [data, setData] = useState([
    {
      assets_title: 'First One',
      file_type: '.mp4',
      date: '10-01-2003'
    }
  ]);
  useEffect(() => {
    fetch("/asset")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
  }, [])

  return (
    <>
      <h3 className="sec">First Part</h3>
      <List cards={data} />
      <h3 className="sec">Second Part</h3>
      <List cards={data} />
      <h3 className="sec">Third part</h3>
      <List cards={data} />
    </>
  )
};

export default Body;
