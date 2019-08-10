import React from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';

const Confirminfo = ({title, description, onPrev, step, onConfirm}) => {

	

	/*const Update = () => {
		const buildingId = postId;

		const updatedInfo = {
			'title': title,
			'description': description
		}

		axios
		.patch(`http://localhost:3000/posts/${buildingId}`, updatedInfo)
		.then(res => {
			console.log(res);
			console.log(res.data);
		});
		console.log('confirmado');
	};*/

	return(
			<div className="">
				<h1>Paso {step} - Confirma que la información sea correcta</h1>
				<h2>Titulo: {title}</h2>
				<h3>Descripción: {description}</h3>
				<button onClick={onConfirm}>Confirmar</button>		
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