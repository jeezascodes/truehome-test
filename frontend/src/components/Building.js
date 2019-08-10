import React from 'react';

const Building = ({title, description}) => {
	return(
			<div className="building__card">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		);
}

export default Building;