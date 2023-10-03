import  { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/PreetamRawat")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
        
    },[])

   

  return (
    <div className='text-center bg-gray-200 m-4 text-red-900 text-3xl p-4 '>Github followers: {data.followers}
    <img src={data.avatar_url} alt='gitpicture..' width="300" />
    </div>
  )
}

export default Github