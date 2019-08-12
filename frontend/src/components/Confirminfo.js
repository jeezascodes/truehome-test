import React from 'react';
import {Link, Redirect } from 'react-router-dom';

const Confirminfo = ({neighborhood, street, number, zip, name, email, phone, price, onPrev, step, onConfirm, confirmed}) => {

	if (confirmed) {
       return <Redirect to='/'/>;
    }
	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Confirma que la información sea correcta</h1>
				<div className="form">
					<h2 className="form__confirm-data">Precio: {price}</h2>
					<h3 className="form__confirm-data">Dirección: {neighborhood + ' ,' + street + ' ,' + number + ' ,' + zip}</h3>
					<h3 className="form__confirm-data">Datos del vendedor: </h3>
					<h4 className="form__confirm-data">Nombre: {name}</h4>
					<h4 className="form__confirm-data">Email: {email}</h4>
					<h4 className="form__confirm-data">Teléfono: {phone}</h4>
					<button className="form__button" onClick={onConfirm}>Confirmar</button>		
					<button className="form__button--secondary" onClick={onPrev}>Atrás</button>			
				</div>

				<Link to="/">
					<button className="form__button--secondary">Cancelar</button>
				</Link>		

			</div>
		);
}

export default Confirminfo;