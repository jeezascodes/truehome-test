import React from 'react';
import {Link} from 'react-router-dom';


const Updateadress = ({neighborhood, street, number,zip, onNext, onNeighborhood,onStreet, onNumber, onZip, step}) => {

	return(
			<div className="form__wrapper">
				<h1 className="form__title">Paso {step} - Editar dirección del inmueble</h1>
				<form className="form">
					<input className="form__input-text" type="text" value={neighborhood} onChange={onNeighborhood} />
					<br />
					<input className="form__input-text" type="text" value={street} onChange={onStreet} />
					<br />
					<input className="form__input-text" type="text" value={number} onChange={onNumber} />
					<br />
					<input className="form__input-text" type="text" value={zip} onChange={onZip} />
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