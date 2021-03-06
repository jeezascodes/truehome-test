import React,{useEffect, useState} from 'react';
import Building from './Building';
import './Dashboard.css';


const Dashboard = () => {
  const [realStateList, setRealStateList] = useState([]);

  useEffect(() => {
    getRealstate();
  }, []);

  //MAKES CALL TO THE API AND GETS EVERY BUILDING POST
  const getRealstate = async () => {
    const response = await fetch('http://localhost:9000/posts/');
    const data = await response.json();
    setRealStateList(data);
  };

  return(
      <div className="dasboard">
        <h1 className="dashboard__app-bar">TrueHome Test</h1>
        <h2>Listado de propiedades</h2>
        <section className="card-container">
          {realStateList.map(property => (

          <Building 
            key={property._id}
            id={property._id}
            image={property.image} 
            price={property.price} 
            name={property.personal.name}
            email={property.personal.email}
            phone={property.personal.phone}
            neighborhood={property.adress.neighborhood}
            street={property.adress.street}
            number={property.adress.number}
            zip={property.adress.zip}
          />
          ))}  
        </section>    
      </div>
    );
}

export default Dashboard;
