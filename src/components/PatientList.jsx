import Patient from "./Patient";

function PatientList({ patients, setPatient, deletePatient}) {
	return (
		<div className="w-full md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
			<h2 className="font-black text-3xl text-center">List of Patients</h2>

			<p className="text-lg mt-5 text-center">
				Update data and {''}
				<span className="text-indigo-600 font-bold">make appointments</span>
			</p>

			{patients.map((patient) => (
				<Patient key={patient.id} patient={patient} setPatient={setPatient} detelePatient={deletePatient} />
			))}
		</div>
	);
}

export default PatientList;

