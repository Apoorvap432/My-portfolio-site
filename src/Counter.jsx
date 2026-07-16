import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({name:"Appu", age: 23})

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={() => setUser({...user, age: 24})}>Update user</button>
        </div>
    )
}

export default Counter;