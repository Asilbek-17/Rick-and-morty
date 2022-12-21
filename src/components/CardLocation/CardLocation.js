import React from 'react';

export const CardLocation = ({ name, image, location, status, id }) => {
	return (
		<li key={id} className='mb-5' >
			<div
				className='card rounded-4 overflow-hidden position-relative'
				style={{ width: '18rem' }}
			>
				{(function () {
					if (status === 'Alive') {
						return (
							<span className='position-absolute badge top-0 bg-success mt-2 ms-2 py-2 px-3'>
								{status}
							</span>
						);
					} else if (status === 'Dead') {
						return (
							<span className='position-absolute badge top-0 bg-danger mt-2 ms-2'>
								{status}
							</span>
						);
					} else {
						return (
							<span className='position-absolute badge top-0 bg-secondary mt-2 ms-2'>
								{status}
							</span>
						);
					}
				})()}
				<img src={image} alt={name} />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'>Last location</p>
					<p className='card-text'>{location}</p>
					<a href='#' className='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
		</li>
	);
};
