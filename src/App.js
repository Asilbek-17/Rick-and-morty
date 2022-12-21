import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Character } from './components/Pages/Character/Character';
import { Location } from './components/Pages/Location/Location';
import { Episode } from './components/Pages/Episode/Episode';

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Character/>}/>
				<Route path='/location' element={<Location />}/>
				<Route path='/episode' element={<Episode />}/>
			</Routes>
		</>
	);
}
