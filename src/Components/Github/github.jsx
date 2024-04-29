import React,{useEffect,useState} from 'react'

function Github() {
 let [data,setData]=useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/Slashz07").
      then(Response => Response.json()).
      then(data => {
        setData(data)
      })
  },[])
  return (
    <div className='text-center bg-gray-600 text-white m-4 p-4 text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github