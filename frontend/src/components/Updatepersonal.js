import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Updatepersonal = ({description, onNext, onPrev}) => {

	return(
			<div className="">
				<form>
					<input type="text" value={description} />
					<br />
					
				</form>
				<button >Continuar</button>	
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