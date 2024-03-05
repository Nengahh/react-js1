import React, { useEffect } from 'react'



const Display = ({ GetData }) => {
  useEffect(() => {
    console.log("GetData change")
  }, [GetData])

  const counterData = GetData()
  return counterData.map((item, index) => <p key={index}>{item}</p>)
}

export default Display