import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Card } from '../../Card/Card';
import { FormSearch } from '../../Form/Form';

export const Character = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [data, setData] = useState([]);
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [species, setSpecies] = useState('');

	const { info, results } = data;
	let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		(async () => {
			const res = await fetch(api);
			const data = await res.json();
			setData(data);
		})();
	}, [api]);
	return (
		<section className='hero pt-5'>
			<div className='container'>
				<h2 className='text-center my-5'>Character</h2>
				
				<FormSearch
					search={setSearch}
					setPage={setPage}
					setStatus={setStatus}
					setGender={setGender}
					setSpecies={setSpecies}
				/>
				<button className='btn btn-danger d-block mx-auto mb-5' onClick={() => {
					setStatus('')
					setGender('')
					setSpecies('')
				}}>
					Clear Selection
				</button>
				<ul className='d-flex align-items-center justify-content-center gap-5 flex-wrap list-unstyled'>
					{results?.map((item) => {
						return (
							<Card
								name={item.name}
								image={item.image}
								location={item.location.name}
								status={item.status}
								id={item.key}
							/>
						);
					})}
				</ul>
				<ReactPaginate
					className='pagination justify-content-center my-5 gap-2'
					pageCount={info?.pages}
					nextLabel='Next'
					previousLabel='Prev'
					previousLinkClassName='btn btn-primary'
					nextLinkClassName='btn btn-primary'
					pageClassName='page-item'
					pageLinkClassName='page-link'
					activeClassName='active'
					forcePage={page === 1 ? 0 : page - 1}
					onPageChange={(data) => {
						setPage(data.selected + 1);
					}}
				/>
			</div>
		</section>
	);
};
