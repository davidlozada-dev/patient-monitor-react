import {useState, useEffect} from "react";
import Error from "./Error";

function RegisterPatientForm({patients, setPatients, patient, setPatient}) {
	const [petName, setPetName] = useState("");
	const [ownerName, setOwnerName] = useState("");
	const [ownerEmail, setOwnerEmail] = useState("");
	const [hospitalizationDate, setHospitalizationDate] = useState("");
	const [symptoms, setSymptoms] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if(Object.keys(patient).length !== 0){
			setPetName(patient.petName);
			setOwnerName(patient.ownerName);
			setOwnerEmail(patient.ownerEmail);
			setHospitalizationDate(patient.hospitalizationDate);
			setSymptoms(patient.symptoms);
		}
	}, [patient]);

	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const date = Date.now().toString(36);

		//generate random ID
		return random + date;
	}

	const handleSubmit = (e) => {
		//prevent the form's default action 
		e.preventDefault();

		//validate the form's inputs
		if ([petName, ownerName, ownerEmail, hospitalizationDate, symptoms].includes('')) {
			setError(true);
			return;
		}

		setError(false);

		//create an object with the given form values and then intruce it into the existing array
		const newPatient = {
			petName,
			ownerName,
			ownerEmail,
			hospitalizationDate,
			symptoms
		};

		if(patient.id){
			//Edit patient
			newPatient.id = patient.id;
			const updatePatientList = patients.map( patientState => patientState.id === patient.id ? newPatient : patientState);
			setPatients(updatePatientList);
			setPatient({});

		} else {
			//Register a new patient
			newPatient.id = generateId();
			setPatients([...patients, newPatient]);
		}


		//restart form values
		setPetName("");
		setOwnerName("");
		setOwnerEmail("");
		setHospitalizationDate("");
		setSymptoms("");
	}
	
	return (
		<div className="w-full md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Registration Form</h2>

			<p className="text-lg mt-5 text-center">
				Register patients and {''}
				<span className="text-indigo-600 font-bold">manage them</span>
			</p>

			<form
				className="bg-slate-100 shadow-lg rounded-xl my-5 p-4 m-3"
				id="registerPatient"
				name="registerPatient"
				onSubmit={handleSubmit}
			>
				{error && (
					<Error>
						<p>All fields are required</p>
					</Error>
				)}

				<div className="my-5">
					<label htmlFor="petName" className="block text-slate-600 font-bold my-2">
						Pet's Name
					</label>
					<input
						id="petName"
						name="petName"
						placeholder="Enter the pet's name here"
						type="text"
						className="border-1 w-full p-2 placeholder-slate-400 rounded-md"
						value={petName}
						onChange={(e) => setPetName(e.target.value)}
					/>
				</div>

				<div className="my-5">
					<label htmlFor="ownerName" className="block text-slate-600 font-bold my-2">
						Owner's Name
					</label>
					<input
						id="ownerName"
						name="ownerName"
						placeholder="Enter the owner's name here"
						type="text"
						className="border-1 w-full p-2 placeholder-slate-400 rounded-md"
						value={ownerName}
						onChange={(e) => setOwnerName(e.target.value)}
					/>
				</div>

				<div className="my-5">
					<label htmlFor="ownerEmail" className="block text-slate-600 font-bold my-2">
						Owner's E-mail
					</label>
					<input
						id="ownerEmail"
						name="ownerEmail"
						placeholder="owneremail@domain.com"
						type="email"
						className="border-1 w-full p-2 placeholder-slate-400 rounded-md"
						value={ownerEmail}
						onChange={(e) => setOwnerEmail(e.target.value)}
					/>
				</div>

				<div className="my-5">
					<label htmlFor="hospitalizationDate" className="block text-slate-600 font-bold my-2">
						Hospitalization Date
					</label>
					<input
						id="hospitalizationDate"
						name="hospitalizationDate"
						type="date"
						className="border-1 w-full p-2 placeholder-slate-400 rounded-md"
						value={hospitalizationDate}
						onChange={(e) => setHospitalizationDate(e.target.value)}
					/>
				</div>

				<div className="my-5">
					<label htmlFor="symtoms" className="block text-slate-600 font-bold my-2">
						Symptoms
					</label>
					<textarea
						id="symtoms"
						name="symtoms"
						placeholder="Enter the patient's symptoms here"
						className="border-1 w-full p-2 placeholder-slate-400 rounded-md"
						value={symptoms}
						onChange={(e) => setSymptoms(e.target.value)}
					/>
				</div>

				<input
					type="submit"
					className="block shadow-xl w-2/5 mx-auto my-5 text-center p-3 bg-indigo-600 text-slate-100 font-semibold rounded-full hover:bg-green-600 cursor-pointer transition-colors"
					value={patient.id ? "Edit Patient" : "Register Patient"}
				/>
			</form>
		</div>
	);
}

export default RegisterPatientForm;






