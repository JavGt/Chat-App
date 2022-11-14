import { useState } from 'react';
import { Header } from './components/Header';
import { SectionMessages } from './components/SectionMessages';
import SectionChat from './components/SectionChat/SectionChat';
import SectionAside from './components/SectionAside/SectionAside';

const App = () => {
	const [open, setOpen] = useState(true);

	const handleMenu = () => setOpen(!open);

	return (
		<div className='h-screen overflow-hidden flex flex-col bg-[#22222A]'>
			<Header handleMenu={handleMenu} />

			<main className='h-full overflow-hidden grid grid-cols-1  lg:grid-cols-8'>
				<SectionMessages open={open} handleMenu={handleMenu} />

				<SectionChat />

				<SectionAside />
			</main>
		</div>
	);
};

export default App;
