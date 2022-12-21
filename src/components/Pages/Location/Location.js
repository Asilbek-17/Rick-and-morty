import React, { useState, useEffect } from 'react';

export const Location = () => {
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);

	const abc = [...data];

	console.log(abc);

	let api2 = `https://rickandmortyapi.com/api/location`;
	// let api2 = `https://rickandmortyapi.com/api/location/${page}`;

	useEffect(() => {
		(async () => {
			const res = await fetch(api2);
			const data = await res.json();
			setData(data.results.map((item) => item.residents));
		})();
	}, [api2]);
	return (
		<section className='pt-5'>
			<div className='container'>
				<h2 className='text-center my-5'>Location</h2>
				{/* <select
// 					className='form-select w-25 mx-auto'
// 					aria-label='Default select example'
// 					onChange={(evt) => setSearch(evt.target.value)}
// 				>
// 					<option value='' selected>
// 						Status
// 					</option>
// 					{data2.map((item) => {
//             return (
//               <option value={item.id}>{item.id}</option>
//             )
//           })}
// 				</select>
// 				<h3 className='text-center my-5'>{data2.name}</h3>
// 				<p className='text-center fs-2 mb-5'>{data2.type}</p> */}
				{/* <ul className='d-flex align-items-center justify-content-center gap-5 flex-wrap list-unstyled'>
// 					{data.results?.map((item) => {
// 						return (
// 							<Card
// 								name={item.name}
// 								image={item.image}
// 								location={item.location.name}
// 								status={item.status}
// 								id={item.key}
// 							/>
// 						);
// 					})}
// 				</ul> */}
			</div>
		</section>
	);
};
