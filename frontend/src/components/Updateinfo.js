import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Updateinfo = ({match}) => {

	//GET BUILDING ID FROM MATCH PROP
	const buildingId = match.params.id

	const [buildingInfo, setBuildingInfo] = useState({});

	useEffect(() => {
	  getBuildingInfo();
	}, []);

	const getBuildingInfo = async () => {
	  const response = await fetch(`http://localhost:3000/posts/${buildingId}`);
	  const data = await response.json();
	  setBuildingInfo(data);
	  console.log(data);
	 }  


	return(
			<div className="">
				<h1>{buildingInfo.title}</h1>
				
				<Link to="/">
					<button>Cancelar</button>
				</Link>
			</div>
		);
}

export default Updateinfo;