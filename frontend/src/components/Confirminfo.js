import React from 'react';
import {Link} from 'react-router-dom';

const Confirminfo = ({title, description, onNext, onPrev, onChange, step}) => {

	return(
			<div className="">
				<h1>Paso {step} - Confirma que la información sea correcta</h1>
				<h2>Titulo: {title}</h2>
				<h3>Descripción: {description}</h3>
				<button >Confirmar</button>	
				<button onClick={onPrev}>Atrás</button>		
				<br />
				<br />
				<Link to="/">
					<button>Cancelar</button>
				</Link>		
			</div>
		);
}

export default Confirminfo;