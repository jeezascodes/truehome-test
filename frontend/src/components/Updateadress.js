import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Updateadress = ({title, onNext, onPrev}) => {


	return(
			<div className="">
				<form>
					<input type="text" value={title} />
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