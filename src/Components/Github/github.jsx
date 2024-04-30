import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData()
  return (
    <div className='text-center bg-gray-600 text-white m-4 p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="profile image" width={300} className='text-center' />
    </div>
  )
}

export default Github

export const githubApiLoader = async () => {
  const response = await fetch("https://api.github.com/users/Slashz07")
  return response.json()
}