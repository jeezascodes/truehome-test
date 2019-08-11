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

	const [buildingPrice, setBuildingPrice] = useState('');
	const [neighborhood, setNeighborhood] = useState('');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	const [zip, setZip] = useState('');
	const [step, setStep] = useState(1);
	const [confirmed, setConfirmed] = useState(false);

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	useEffect(() => {
	  getBuildingInfo();
	}, []);

	const getBuildingInfo = async () => {
	  const response = await fetch(`http://localhost:9000/posts/${buildingId}`);
	  const data = await response.json();
	  setBuildingPrice(data.price);
	  setNeighborhood(data.adress.neighborhood);
	  setStreet(data.adress.street);
	  setNumber(data.adress.number);
	  setZip(data.adress.zip);
	 };  

	const handleChangePrice = (e) =>  {
	 	setBuildingPrice(e.target.value);
	}
	const handleNeighborhood = (e) =>  {
		setNeighborhood(e.target.value);
	}
	const handleStreet = (e) =>  {
	 	setStreet(e.target.value);
	}
	const handleNumber = (e) =>  {
		setNumber(e.target.value);
	}
	const handleZip = (e) =>  {
		setZip(e.target.value);
	}

	const Update = () => {
		const updatedInfo = {
			'price': buildingPrice,
			'adress': {
				colonia: neighborhood
			}
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
					neighborhood={neighborhood} 
					street={street}
					number={number}
					zip={zip}
					onNext={nextStep} 
					onNeighborhood={handleNeighborhood}
					onStreet={handleStreet}
					onNumber={handleNumber}
					onZip={handleZip} 
					step={step}
					/>
				</div>
			)
		case 2: return(
				<div className="form__container">
					<div className="form__progress-bar" style={{'width': `${100/3*2}%`}}></div>
					<Updatepersonal 
					neighborhood={neighborhood} 
					onNext={nextStep} 
					onPrev={prevStep} 
					onChange={handleNeighborhood}
					step={step}
					/>
				</div>
			)
		case 3: return(
				<div className="form__container">
					<div className="form__progress-bar" ></div>
					<Updateprice
					price={buildingPrice}
					onNext={nextStep} 
					onPrev={prevStep} 
					onChange={handleChangePrice}
					step={step}
					/>
				</div>
			)
		case 4: return(
				<div className="form__container">
					<div className="form__progress-bar" ></div>
					<Confirminfo
					title={buildingPrice} 
					description={handleNeighborhood} 
					onPrev={prevStep} 
					step={step}
					onConfirm={Update}
					confirmed={confirmed}
					/>
				</div>
			)
	}
}

export default Updateinfo;