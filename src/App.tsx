import { useState, useEffect } from 'react'
import './App.css'
import { IUser } from './Interfaces';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let subscribe = true;

    // Flag to track if the component is still mounted
    const fetchUrl = async() => {
      const res: Response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      if(subscribe){
        setUsers(data);
      }
    }

    fetchUrl();

    // This function will run when the component unmounts or when the effect is re-run
    return () => {
      subscribe = false; // Set the flag to false when unmounting
    }
  }, []) // The empty array means this effect only runs once, put a dependency state to watch changes!

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
