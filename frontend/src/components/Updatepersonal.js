import React from 'react';
import {Link} from 'react-router-dom';

const Updatepersonal = ({name, email, phone, onNext, onPrev, onName, onEmail, onPhone, step}) => {

	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Editar datos del vendedor</h1>
				<form className="form">
					<input className="form__input-text" type="text" value={name} onChange={onName}/>
					<br />
					<input className="form__input-text" type="text" value={email} onChange={onEmail}/>
					<br />
					<input className="form__input-text" type="text" value={phone} onChange={onPhone}/>
					<br />	
					<button className="form__button" onClick={onNext}>Continuar</button>	
				<button className="form__button--secondary" onClick={onPrev}>Atrás</button>		
				</form>

				<Link to="/">
					<button className="form__button--secondary">Cancelar</button>
				</Link>		
			</div>
		);
}

export default Updatepersonal;