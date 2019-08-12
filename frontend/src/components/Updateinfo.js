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

	//USE HOOKS TO GET STATE
	const [image, setImage] = useState('');
	const [buildingPrice, setBuildingPrice] = useState('');
	const [neighborhood, setNeighborhood] = useState('');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	const [zip, setZip] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [step, setStep] = useState(1);
	const [confirmed, setConfirmed] = useState(false);

	//COUNTER FOR MULTISTEP FORM
	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	//RUNS WHEN THE PAGE FIRST LOADS AND CALL GET BUILDING FUNCTION
	useEffect(() => {
	  getBuildingInfo();
	}, []);

	//MAKES AN API REQUESTS AND GETS THE SPECICIF BUILDING INFO USING THE ID
	const getBuildingInfo = async () => {
	  const response = await fetch(`http://localhost:9000/posts/${buildingId}`);
	  const data = await response.json();
	  setImage(data.image);
	  setBuildingPrice(data.price);
	  setNeighborhood(data.adress.neighborhood);
	  setStreet(data.adress.street);
	  setNumber(data.adress.number);
	  setZip(data.adress.zip);
	  setName(data.personal.name);
	  setEmail(data.personal.email);
	  setPhone(data.personal.phone);
	 };  

	//EVENT HANDLERS FOR EVERY INPUT
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
	const handleName = (e) =>  {
	 	setName(e.target.value);
	}
	const handleEmail = (e) =>  {
		setEmail(e.target.value);
	}
	const handlePhone = (e) =>  {
		setPhone(e.target.value);
	}

	//UPDATES THE BUILDING INFO IF CONFIRMMED
	const Update = () => {
		const updatedInfo = {
			'image': image,
			'price': buildingPrice,
			'adress': { 
				'zip': zip, 
				'neighborhood': neighborhood,
				'street': street,
				'number': number
			},
			'personal': {
				'name': name, 
				'email': email, 
				'phone': phone
			}
		}

		axios
		.patch(`http://localhost:9000/posts/${buildingId}`, updatedInfo)
		.then(res => {
			console.log(res);
			console.log(res.data);
			setConfirmed(true);
		});
		
	};

	//STYLE OBJET FOR FORM WRAPPER
	const styleBgImage = {
		'backgroundImage': 'url(' + image + ')',
		'backgroundSize': 'cover'
	};

	switch(step) {
		case 1: return(
				<div className="form__container" style={styleBgImage}>
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
				<div className="form__container" style={styleBgImage}>
					<div className="form__progress-bar" style={{'width': `${100/3*2}%`}}></div>
					<Updatepersonal 
					name={name} 
					email={email} 
					phone={phone} 
					onNext={nextStep} 
					onPrev={prevStep} 
					onName={handleName}
					onEmail={handleEmail}
					onPhone={handlePhone}
					step={step}
					/>
				</div>
			)
		case 3: return(
				<div className="form__container" style={styleBgImage}>
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
				<div className="form__container" style={styleBgImage}>
					<div className="form__progress-bar" ></div>
					<Confirminfo
					neighborhood={neighborhood} 
					street={street}
					number={number}
					zip={zip}
					name={name} 
					email={email} 
					phone={phone} 
					onPrev={prevStep} 
					price={buildingPrice}
					step={step}
					onConfirm={Update}
					confirmed={confirmed}
					/>
				</div>
			)
	}
}

export default Updateinfo;