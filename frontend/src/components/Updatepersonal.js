import React from 'react';
import {Link} from 'react-router-dom';

const Updatepersonal = ({description, onNext, onPrev, onChange, step}) => {

	return(
			<div className="">
				<h1>Paso {step} - Editar datos del vendedor</h1>
				<form>
					<input type="text" value={description} onChange={onChange}/>
					<br />	
				</form>
				<button onClick={onNext}>Continuar</button>	
				<button onClick={onPrev}>Atrás</button>		
				<br />
				<br />
				<Link to="/">
					<button>Cancelar</button>
				</Link>		
			</div>
		);
}

export default Updatepersonal;