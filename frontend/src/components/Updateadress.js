import React from 'react';
import {Link} from 'react-router-dom';

const Updateadress = ({title, onNext, onChange, step}) => {


	return(
			<div className="">
				<h1>Paso {step} - Editar dirección del inmueble</h1>
				<form>
					<input type="text" value={title} onChange={onChange} />
					<br />
				</form>
				<button onClick={onNext}>Continuar</button>	
				<br />
				<br />
				<Link to="/">
					<button>Cancelar</button>
				</Link>		
			</div>
		);
}

export default Updateadress;