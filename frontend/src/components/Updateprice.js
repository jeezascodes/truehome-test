import React from 'react';
import {Link} from 'react-router-dom';

const Updateprice = ({description, onNext, onPrev, onChange, step}) => {

	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Editar el precio</h1>
				<form className="form">
					<input className="form__input-text" type="text" value={step} onChange={onChange}/>
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

export default Updateprice;