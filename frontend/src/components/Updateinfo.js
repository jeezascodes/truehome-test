import React,{useEffect, useState} from 'react';
import Updateadress from './Updateadress';
import Updatepersonal from './Updatepersonal';
import Updateprice from './Updateprice';
import Confirminfo from './Confirminfo';
import axios from 'axios';


const Updateinfo = ({match}) => {

	//GET BUILDING ID FROM MATCH PROP
	const buildingId = match.params.id

	const [buildingTitle, setBuildingTitle] = useState('');
	const [buildingDescription, setBuildingDescription] = useState('');
	const [step, setStep] = useState(1);

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	useEffect(() => {
	  getBuildingInfo();
	}, []);

	const getBuildingInfo = async () => {
	  const response = await fetch(`http://localhost:3000/posts/${buildingId}`);
	  const data = await response.json();
	  setBuildingTitle(data.title);
	  setBuildingDescription(data.description);
	 };  

	const handleChangeTitle = (e) =>  {
	 	setBuildingTitle(e.target.value);
	}
	const handleChangeDescription = (e) =>  {
		setBuildingDescription(e.target.value);
	}

	const Update = () => {
		const updatedInfo = {
			'title': buildingTitle,
			'description': buildingDescription
		}

		axios
		.patch(`http://localhost:3000/posts/${buildingId}`, updatedInfo)
		.then(res => {
			console.log(res);
			console.log(res.data);
		});
	};
	

	switch(step) {
		case 1: return(
				<div className="">
					<Updateadress 
					title={buildingTitle} 
					onNext={nextStep} 
					onChange={handleChangeTitle} 
					step={step}/>
				</div>
			)
		case 2: return(
				<div className="">
					<Updatepersonal 
					description={buildingDescription} 
					onNext={nextStep} 
					onPrev={prevStep} 
					onChange={handleChangeDescription}
					step={step}
					/>
				</div>
			)
		case 3: return(
				<div className="">
					<Updateprice
					onNext={nextStep} 
					onPrev={prevStep} 
					onChange={handleChangeDescription}
					step={step}
					/>
				</div>
			)
		case 4: return(
				<div className="">
					<Confirminfo
					title={buildingTitle} 
					description={buildingDescription} 
					onPrev={prevStep} 
					step={step}
					onConfirm={Update}
					/>
				</div>
			)
		default: return(
				<div className="">
					<Updateadress title={buildingTitle} onNext={nextStep} onPrev={prevStep}/>
				</div>
			)
	}
}

export default Updateinfo;