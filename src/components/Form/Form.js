import React from 'react';

export const FormSearch = ({ search, setPage, setStatus, setGender, setSpecies}) => {
	return (
		<form className='d-flex justify-content-between align-items-center w-100'>
			<input
				className='form-control rounded-pill w-25 my-5'
				type='search'
				placeholder='Search...'
				onChange={(evt) => {
					setPage(1);
					search(evt.target.value);
				}}
			/>
			<select className='form-select w-25 rounded-pill' aria-label='Default select example' onChange={evt => setStatus(evt.target.value)}>
				<option value='' selected>Status</option>
				<option value='alive'>alive</option>
				<option value='dead'>dead</option>
				<option value='unknown'>unknown</option>
			</select>
      <select className='form-select w-25 rounded-pill' aria-label='Default select example' onChange={evt => setGender(evt.target.value)}>
				<option value='' selected>Gender</option>
				<option value='female'>female</option>
				<option value='male'>male</option>
				<option value='genderless'>genderless</option>
				<option value='unknown'>unknown</option>
			</select>
      <select className='form-select w-25 rounded-pill' aria-label='Default select example' onChange={evt => setSpecies(evt.target.value)}>
				<option value='' selected>Species</option>
				<option value='Human'>Human</option>
				<option value='Alien'>Alien</option>
				<option value='Humanoid'>Humanoid</option>
				<option value='Poopybutthole'>Poopybutthole</option>
				<option value='Mythological'>Mythological</option>
				<option value='unknown'>unknown</option>
				<option value='Disease'>Disease</option>
				<option value='Cronenberg'>Cronenberg</option>
				<option value='Animal'>Animal</option>
				<option value='Robot'>Robot</option>
				<option value='Planet'>Planet</option>
			</select>
		</form>
	);
};
