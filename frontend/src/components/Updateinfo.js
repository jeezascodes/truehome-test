import React,{useEffect, useState} from 'react';
import Updateadress from './Updateadress';
import Updatepersonal from './Updatepersonal';

const Updateinfo = ({match}) => {

	//GET BUILDING ID FROM MATCH PROP
	const buildingId = match.params.id

	const [buildingInfo, setBuildingInfo] = useState({});
	const [step, setStep] = useState(1);

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	useEffect(() => {
	  getBuildingInfo();
	}, []);

	const getBuildingInfo = async () => {
	  const response = await fetch(`http://localhost:3000/posts/${buildingId}`);
	  const data = await response.json();
	  setBuildingInfo(data);
	 };  

	

	switch(step) {
		case 1: return(
				<div className="">
					<h1 onClick={nextStep}>Paso {step}</h1>
					<Updateadress title={buildingInfo.title} onNext={nextStep} onPrev={prevStep}/>
				</div>
			)
		case 2: return(
				<div className="">
					<h1 onClick={nextStep}>Paso {step}</h1>
					<Updatepersonal description={buildingInfo.description} onNext={nextStep} onPrev={prevStep}/>
				</div>
			)
		default: return(
				<div className="">
					<h1 onClick={nextStep}>Paso {step}</h1>
					<Updateadress title={buildingInfo.title} onNext={nextStep} onPrev={prevStep}/>
				</div>
			)
	}
}

export default Updateinfo;