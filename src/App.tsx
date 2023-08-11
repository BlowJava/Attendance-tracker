import { useState, useEffect } from 'react'
import './App.css'
import { IUser } from './Interfaces';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let subscribe = true;
    //A function fetching a data from api
    const fetchUrl = async() => {
      const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      if(subscribe){
        setUsers(data);
      }
    }

    //Call a fetch function
    fetchUrl();

    // Unsubscribe
    return () => {
      subscribe = false;
    }
  }, []) // This effect will run once!

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
