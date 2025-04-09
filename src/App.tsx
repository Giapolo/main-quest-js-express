import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const  [employee, setEmployee] = useState(null);


  useEffect(() =>{
  fetch("http://localhost:3310/api/employees")
  .then(response => response.json())
  .then(data => setEmployee(data.results[0]))
  .catch(err => console.error(err));
  }, []);

  if (employee === null){
    return <p>wait...</p>;
  }
  return (
    
    <>
      <div>
          <h1>Employee :</h1>
          <p>{employee.name.first} {employee.name.last}</p>
          <p>{employee.email}</p>
          <img src={employee.picture.medium}/>
      </div>
    </>
  )
}

export default App
