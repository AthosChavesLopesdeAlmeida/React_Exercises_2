import { useEffect, useState } from "react"
import React from "react"
import './test.css'

function Fecth_UseEffect () {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const finalResponse = await response.json()
        setData(finalResponse)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)

      } catch (error) {
        setError(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
        throw new Error(error)

      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="container">
      {isLoading ? 
        <p>Loading...</p> : 
        <div>
          {error ? 
            <p>Error!</p> :
            <div>
              <h2>Names: </h2>
              {data.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
            }
        </div>
      }
    </div>
  )
}

export default Fecth_UseEffect