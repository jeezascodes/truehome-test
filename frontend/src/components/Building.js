import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Building = ({id, title, description}) => {
	return(
			<Link to={`/update/${id}`} className="card-wrapper">
				<div className="building__card">
					<img className="card__image" src="https://media.truehome.com.mx/media/original_images/891_Estancia_.jpg" alt="{title}" />
					<div className="card__body">
						<h1>{title}</h1>
						<ul>
							<li>tlff 55562211</li>
							<li>@ test@test.com</li>
							<li>nombre Fernando</li>
						</ul>
						<p className="card__adress">{description}</p>
						<button className="card__button">editar</button>
					</div>		
				</div>	
			</Link>
		);
}

export default Building;