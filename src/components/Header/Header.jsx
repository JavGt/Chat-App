import { useState } from 'react';
import {
	RiNotificationLine,
	RiMessageFill,
	RiSearchLine,
	RiArrowDownSLine,
	RiCloseFill,
	RiMenu2Fill,
} from 'react-icons/ri';

const Header = ({ handleMenu }) => {
	const [search, setSearch] = useState('');

	const handleSearch = e => setSearch(e.target.value);

	const handleClearSearch = () => setSearch('');
	return (
		<header className='w-full flex items-center justify-between py-3 px-8 bg-[#141517]'>
			<div className='flex gap-3'>
				<button
					onClick={handleMenu}
					className='lg:hidden rounded text-white p-3 bg-[#34344050]'
				>
					<RiMenu2Fill />
				</button>

				<div className='flex gap-2 items-center'>
					<RiMessageFill className='text-[#f2f2f2] text-2xl md:text-xl' />
					<h1 className=' hidden md:block text-[#f2f2f2] text-2xl md:text-xl'>
						Chat App
					</h1>
				</div>
			</div>

			<form className='hidden md:block'>
				<div className='relative'>
					<input
						value={search}
						onChange={handleSearch}
						placeholder='Search or start new chat'
						type='text'
						className='w-full bg-[#050505] outline-none py-2 pl-4 pr-10 rounded text-gray-300 border-b-[1px] border-[#ccc] focus:border-[#1DA1F2]'
					/>
					<div className=' p-2 absolute top-0 bottom-0 w-10 right-0  flex items-center justify-center'>
						{search ? (
							<button
								onClick={handleClearSearch}
								className=' hover:bg-gray-800 p-1 rounded'
							>
								<RiCloseFill className='text-gray-300  ' />
							</button>
						) : (
							<RiSearchLine className='text-gray-300' />
						)}
					</div>
				</div>
			</form>

			<div className='flex items-center gap-5'>
				<div className='relative'>
					<RiNotificationLine className='text-xl text-gray-300' />
					<span className='absolute bg-purple-600 rounded-full text-[10px] font-bold  text-white py-[2px] px-[6px] -top-2 -right-2'>
						2
					</span>
				</div>

				{/* User */}
				<button className='hover:bg-[#343440]  flex items-center gap-2 border-[1px] border-gray-300 rounded-full p-1 text-gray-300 '>
					<div
						src='/avatar.gif'
						className='w-6 h-6 rounded-full object-cover ring-1 ring-white bg-white '
					/>
					<p className=' font-semibold truncate w-16'>Javier Gutierrez</p>
					<span>
						<RiArrowDownSLine />
					</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
