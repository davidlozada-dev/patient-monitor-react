import {useState, useEffect} from "react";
import Header from "./components/Header";
import RegisterPatientForm from "./components/RegisterPatientForm";
import PatientList from "./components/PatientList";

function App() {
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

	const deletePatient = (id) => {
		const updatePatientList = patients.filter(patient => patient.id !== id);
		setPatients(updatePatientList);
	}

	useEffect(() => {
		const getLocalStorage = () => {
			const localStoragePatients = JSON.parse(localStorage.getItem("patients")) ?? [];
			setPatients(localStoragePatients);
		}
		getLocalStorage();
	}, []);

	useEffect(() => {
		// console.log("componente listo)");
		localStorage.setItem("patients", JSON.stringify(patients));
	}, [patients]);

  return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<RegisterPatientForm 
					patient={patient}
					setPatient={setPatient}
					patients={patients}
					setPatients={setPatients}
				/>
				<PatientList 
					patients={patients}
					setPatient={setPatient}
					deletePatient={deletePatient}
				/>
			</div>
		</div>
	);
}

export default App;
