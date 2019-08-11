import React,{useEffect, useState} from 'react';
import Building from './Building';
import './Dashboard.css';


const Dashboard = () => {

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
      <div className="dasboard">
        <h1 className="dashboard__app-bar">TrueHome Test</h1>
        <h2>Listado de propiedades</h2>
        <section className="card-container">
          {realStateList.map(property => (
          <Building 
            key={property._id}
            id={property._id}
            title={property.title} 
            description={property.description}
          />
          ))}  
        </section>    
      </div>
    );
}

export default Dashboard;
