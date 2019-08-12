import React,{useEffect, useState} from 'react';
import UserIcon from './icon-components/UserIcon';
import EmailIcon from './icon-components/EmailIcon';
import PhoneIcon from './icon-components/PhoneIcon';
import {Link} from 'react-router-dom';

const Building = ({id,image, price,name,email,phone, neighborhood, street, number, zip}) => {
	return(
			<Link to={`/update/${id}`} className="card-wrapper">
				<div className="building__card">
					<img className="card__image" src={image} alt="{price}" />
					<div className="card__body">
						<h1 className="card__title">{price}</h1>
						<ul className="card__list-info">
							<li className="card__li"><UserIcon />{name}</li>
							<li className="card__li"><EmailIcon />{email}</li>
							<li className="card__li"><PhoneIcon />{phone}</li>
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