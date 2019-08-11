import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Building = ({id,image, price,name,email,phone, neighborhood, street, number, zip}) => {
	return(
			<Link to={`/update/${id}`} className="card-wrapper">
				<div className="building__card">
					<img className="card__image" src={image} alt="{price}" />
					<div className="card__body">
						<h1 >{price}</h1>
						<ul>
							<li>Nombre: {name}</li>
							<li>Email: {email}</li>
							<li>Telefono: {phone}</li>
						</ul>
						<div className="card__adress">
							<p className="">Colonia: {neighborhood}</p>
							<p className="">Calle: {street}</p>
							<p className="">Numero: {number}</p>
							<p className="">Código postal: {zip}</p>
						</div>
						
						<button className="card__button">editar</button>
					</div>		
				</div>	
			</Link>
		);
}

export default Building;