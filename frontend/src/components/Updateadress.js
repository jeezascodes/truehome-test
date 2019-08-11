import React from 'react';
import {Link} from 'react-router-dom';


const Updateadress = ({title, onNext, onChange, step}) => {


	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Editar dirección del inmueble</h1>
				<form className="form">
					<input className="form__input-text" type="text" value={title} onChange={onChange} />
					<br />
					<button className="form__button" onClick={onNext}>Continuar</button>
				</form>
					
				<Link to="/">
					<button className="form__button--secondary">Cancelar</button>
				</Link>		
			</div>
		);
}

export default Updateadress;