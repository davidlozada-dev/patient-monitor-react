import PatientList from "./PatientList";

function Patient({ patient, setPatient, detelePatient}) {
	const { petName, ownerName, ownerEmail, hospitalizationDate, symptoms, id } = patient;

	const handleDelete = () => {
		const response = confirm("Do you want to delete this patient?");

		if(response){
			detelePatient(id);
		}
	}

	return (
		<div className="m-3 bg-slate-100 shadow-lg my-5 p-4 rounded-xl ">
			<p className="font-bold mb-2 text-indigo-900">
				Pet's Name: {''}
				<span className="font-normal normal-case text-slate-600">{petName}</span>
			</p>

			<p className="font-bold mb-2 text-indigo-900">
				Owner's Name: {''}
				<span className="font-normal normal-case text-slate-600">{ownerName}</span>
			</p>

			<p className="font-bold mb-2 text-indigo-900">
				Owner's E-mail: {''}
				<span className="font-normal normal-case text-slate-600">{ownerEmail}</span>
			</p>

			<p className="font-bold mb-2 text-indigo-900">
				Hospitalization Date: {''}
				<span className="font-normal normal-case text-slate-600">{hospitalizationDate}</span>
			</p>

			<p className="font-bold mb-2 text-indigo-900">
				Symptons: {''}
				<span className="font-normal normal-case text-slate-600">{symptoms}</span>
			</p>

			<div className="flex justify-end text-slate-100 font-semibold">
				<button
					type="button"
					className="bg-indigo-600 p-2 px-7 mx-1 rounded-full hover:bg-indigo-700 transition-colors cursor-pointer"
					onClick={() => setPatient(patient)}
				>
					Edit
				</button>
				<button
					type="button"
					className="bg-red-600 p-2 px-5 mx-1 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Patient;