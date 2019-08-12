import React,{useEffect, useState} from 'react';
import UserIcon from './icon-components/UserIcon';
import EmailIcon from './icon-components/EmailIcon';
import PhoneIcon from './icon-components/PhoneIcon';
import './Building.css';
import {Link} from 'react-router-dom';

const Building = ({id,image, price,name,email,phone, neighborhood, street, number, zip}) => {
	return(
			<Link to={`/update/${id}`} className="card-wrapper">
				<div className="building__card">
					<img className="card__image" src={image} alt="{price}" />
					<div className="card__body">
						<h1 className="card__title">{price}</h1>
						<ul className="card__adress-list">
							<li className="card__paragraph"><strong>Colonia:</strong> {neighborhood}</li>
							<li className="card__paragraph"><strong>Calle:</strong> {street}</li>
							<li className="card__paragraph"><strong>Numero:</strong> {number}</li>
							<li className="card__paragraph"><strong>Código postal:</strong> {zip}</li>
						</ul>
						<ul className="card__list-info">
							<li className="card__li"><UserIcon />{name}</li>
							<li className="card__li"><EmailIcon />{email}</li>
							<li className="card__li"><PhoneIcon />{phone}</li>
						</ul>
						
						
						<button className="card__button">editar</button>
					</div>		
				</div>	
			</Link>
		);
}

export default Building;