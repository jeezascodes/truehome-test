import React,{useEffect, useState} from 'react';
import Building from './components/Building'
import './App.css';

const App = () => {

  const [realStateList, setRealStateList] = useState([]);

  useEffect(() => {
    getRealstate();
  }, []);

  const getRealstate = async () => {
    const response = await fetch('http://localhost:3000/posts/');
    const data = await response.json();
    setRealStateList(data);
  }

  return(
      <div className="App">
        <h1>Lista de Inmuebles</h1>
      
      {realStateList.map(property => (
        <Building 
          key={property._id}
          title={property.title} 
          description={property.description}
        />
      ))}
      </div>
    );
}

export default App;
