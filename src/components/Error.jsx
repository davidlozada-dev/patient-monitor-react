function Error({children}) {
	return (
		<div className="bg-red-600 text-center text-slate-200 rounded-full p-2 w-2/3 m-auto font-bold uppercase">
			{children}
		</div>
	);
}

export default Error