import  { useEffect, useState } from 'react'

function Github() {
    const [data , setData] = useState([])

    
        useEffect(()=>{
            fetch('https://api.github.com/users/Tyagi221B')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                setData(data)

            })
        })
    
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 flex justify-center">
      Hitesh Sir Followers : {data.followers}
    </div>
  )
}

export default Github
