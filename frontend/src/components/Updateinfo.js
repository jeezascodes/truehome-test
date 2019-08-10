import React from 'react';
import {Link} from 'react-router-dom';

const Updateinfo = ({title, description}) => {
	return(
			<div className="">
				<h1>here should be a form</h1>
				<Link to="/">
					<button>Cancelar</button>
				</Link>
			</div>
		);
}

export default Updateinfo;