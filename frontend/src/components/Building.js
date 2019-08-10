import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Building = ({id, title, description}) => {

	//const [item,setItems] = useState([]);

	return(
			<Link to={`/update/${id}`}>
				<div className="building__card">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>	
			</Link>
		);
}

export default Building;