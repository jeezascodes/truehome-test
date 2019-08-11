import React from 'react';
import {Link, Redirect } from 'react-router-dom';
//import axios from 'axios';

const Confirminfo = ({title, description, onPrev, step, onConfirm, confirmed}) => {

	if (confirmed) {
       return <Redirect to='/'/>;
    }
	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Confirma que la información sea correcta</h1>
				<div className="form">
					<h2>Titulo: {title}</h2>
					<h3>Descripción: {description}</h3>
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