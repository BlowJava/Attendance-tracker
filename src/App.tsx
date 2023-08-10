import { useState, useEffect } from 'react'
import './App.css'
import { IUser } from './Interfaces';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let sub = true;
    const fetchUser = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json()

        if(sub){
          setUsers(json)
        }
      }catch(e){
        console.log(e)
      }
    }

    fetchUser()

    return () => {
      sub = false;
    }
  }, []);

  return (
    <>
      <h1>Test</h1>
      {users.map((user: IUser) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <a href={'https://jsonplaceholder.typicode.com/users/' + user.id}>link</a>
          </div>
        )
      })}
    </>
  )
}

export default App
