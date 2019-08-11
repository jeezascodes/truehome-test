import React,{useEffect, useState} from 'react';
import Updateadress from './Updateadress';
import Updatepersonal from './Updatepersonal';
import Updateprice from './Updateprice';
import Confirminfo from './Confirminfo';
import axios from 'axios';
import './Updateinfo.css';


const Updateinfo = ({match}) => {

	//GET BUILDING ID FROM MATCH PROP
	const buildingId = match.params.id

	const [buildingTitle, setBuildingTitle] = useState('');
	const [buildingDescription, setBuildingDescription] = useState('');
	const [step, setStep] = useState(1);
	const [confirmed, setConfirmed] = useState(false);

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
			setConfirmed(true);
		});
		
	};

	switch(step) {
		case 1: return(
				<div className="form__container">
					<div className="form__progress-bar" style={{'width': `${100/3}%`}}></div>
					<Updateadress 
					title={buildingTitle} 
					onNext={nextStep} 
					onChange={handleChangeTitle} 
					step={step}/>
				</div>
			)
		case 2: return(
				<div className="form__container">
					<div className="form__progress-bar" style={{'width': `${100/3*2}%`}}></div>
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
				<div className="form__container">
					<div className="form__progress-bar" ></div>
					<Updateprice
					onNext={nextStep} 
					onPrev={prevStep} 
					onChange={handleChangeDescription}
					step={step}
					/>
				</div>
			)
		case 4: return(
				<div className="form__container">
					<div className="form__progress-bar" ></div>
					<Confirminfo
					title={buildingTitle} 
					description={buildingDescription} 
					onPrev={prevStep} 
					step={step}
					onConfirm={Update}
					confirmed={confirmed}
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