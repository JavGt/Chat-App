import {
	RiCheckDoubleFill,
	RiMessage3Fill,
	RiPushpinFill,
	RiSearchLine,
	RiCloseFill,
	RiArrowRightSLine,
	RiMessageFill,
} from 'react-icons/ri';
import maleAvatar from '/male-avatar.gif';
import maleAvatar2 from '/male-avatar2.gif';
import maleAvatar3 from '/male-avatar3.gif';
import maleAvatar4 from '/male-avatar4.gif';
import maleAvatar5 from '/male-avatar5.gif';
import maleAvatar6 from '/male-avatar6.gif';

import femaleAvatar from '/female-avatar.gif';
import femaleAvatar2 from '/female-avatar2.gif';
import femaleAvatar3 from '/female-avatar3.gif';
import femaleAvatar4 from '/female-avatar4.gif';
import femaleAvatar5 from '/female-avatar5.gif';
import femaleAvatar6 from '/female-avatar6.gif';
import { useState } from 'react';

const HeaderSectionMessages = ({ handleMenu }) => {
	const [search, setSearch] = useState('');

	const handleSearch = e => setSearch(e.target.value);

	const handleClearSearch = () => setSearch('');

	return (
		<div className='p-8'>
			<div className='flex justify-between items-center mb-2'>
				<div className='flex gap-2 items-center'>
					<h1 className='text-gray-300 text-3xl  font-semibold'>Chats</h1>

					<img src='icons8-reaccionar-nativo-480.png' alt='' className='w-8 h-8' />
					<img src='icons8-tailwindcss-480.png' alt='' className='w-8 h-8' />
				</div>

				<button
					onClick={handleMenu}
					className='lg:hidden rounded text-white p-3 bg-[#343440]'
				>
					<RiArrowRightSLine />
				</button>
			</div>

			<form className='hidden md:block  mb-2'>
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
		</div>
	);
};

const PinnedSectionMessages = () => {
	return (
		<div className='relative'>
			<h5 className='bg-[#22222A] z-10 sticky top-0 px-3 text-gray-300 text-sm flex items-center gap-2 mb-1 pb-1 '>
				<RiPushpinFill />
				<span>Pinned</span>
			</h5>

			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{true && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Delilah Loviisa
						</h3>
						<span className='flex-grow'>
							<RiPushpinFill className='text-gray-300 text-sm' />
						</span>
						<p className='  text-green-500 break-normal whitespace-nowrap'>12:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-green-500 truncate'>Typing...</p>

						<span className='bg-green-500 text-black rounded-full py-1 px-2 text-xs font-semibold'>
							{2 < 99 ? 2 : '+99'}
						</span>
					</div>
				</div>
			</button>

			{/* User */}
			<button className='p-3 bg-[#2b2b35]  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				<div className='relative flex items-center justify-center'>
					<div
						src='business-team.gif'
						className='bg-white w-12 h-12 object-cover rounded-full '
					/>

					{true && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Design Team
						</h3>
						<span className='flex-grow'>
							<RiPushpinFill className='text-gray-300 text-sm' />
						</span>

						<p className='text-gray-500 break-normal whitespace-nowrap'>11:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-green-500 truncate'>Welcoming new members to the team</p>

						<span className='bg-green-500 text-black rounded-full py-1 px-2 text-xs font-semibold'>
							{10 < 99 ? 10 : '+99'}
						</span>
					</div>
				</div>
			</button>

			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				<div className='relative flex items-center justify-center'>
					<div
						src='female-avatar.gif'
						className='bg-white w-12 h-12 object-cover rounded-full '
					/>
					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}

				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Jerneja Basajaun
						</h3>
						<span className='flex-grow'>
							<RiPushpinFill className='text-gray-300 text-sm' />
						</span>
						<p className='text-gray-500 break-normal whitespace-nowrap'>09:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500 truncate'>Wow really? 🔥</p>
						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
		</div>
	);
};

const AllSectionMessages = () => {
	return (
		<div className='relative'>
			<h5 className='bg-[#22222A] z-10 sticky top-0 px-3 text-gray-300 text-sm flex items-center gap-2 mb-1 pb-1 '>
				<RiMessage3Fill />
				<span> All Messages</span>
			</h5>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Mercurius Efa
						</h3>

						<p className='  text-green-500 break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-green-500 truncate'>
							Hello, I'm looking for a designer to work on a project
						</p>

						<span className='bg-green-500 text-black rounded-full py-1 px-2 text-xs font-semibold'>
							{2 < 99 ? 2 : '+99'}
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{true && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Herodotus Nausicaa
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>04:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-green-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{true && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Titu Rosalinda
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>08:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-green-500' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Vladislav Gargi
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Aaron Doireann
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Astrid Eka
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Astrid Eka
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Astrid Eka
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Astrid Eka
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
			<button className='p-3  hover:bg-[#343440] transition-colors duration-300 rounded flex gap-3 items-center w-full mb-1'>
				{/* Image */}
				<div className='relative flex items-center justify-center'>
					<div
						src={maleAvatar}
						className='w-12 h-12 object-cover rounded-full bg-white'
					/>

					{false && (
						<div className='absolute w-3 h-3 bottom-0  right-0 ring-1 ring-white bg-green-500 rounded-full' />
					)}
				</div>

				{/* Name and hour */}
				<div className='flex flex-col gap-1 flex-grow overflow-hidden'>
					<div className='flex justify-between items-center gap-2'>
						<h3 className='flex  items-center gap-2 text-gray-300 font-semibold truncate'>
							Astrid Eka
						</h3>

						<p className='text-gray-500  break-normal whitespace-nowrap'>02:00 PM</p>
					</div>

					<div className='flex justify-between items-center gap-1'>
						<p className='text-gray-500  truncate'>Hi, I'm interested in your project</p>

						<span>
							<RiCheckDoubleFill className='text-gray-500 text-xl' />
						</span>
					</div>
				</div>
			</button>
		</div>
	);
};

const NewMessage = () => {
	return (
		<div className='sticky bottom-2 flex mb-2 z-10'>
			<button type='button' className='ml-auto bg-green-600 p-4 rounded-full text-lg'>
				<RiMessageFill className='text-white ' />
			</button>
		</div>
	);
};

const SectionMessages = ({ open, handleMenu }) => {
	const isOpen = open ? 'left-0' : '-left-full';

	return (
		<section
			className={`col-span-2 flex flex-col overflow-hidden z-40 h-full top-0 bg-[#22222A] fixed lg:static w-full md:w-1/2 lg:w-full ${isOpen} transition-[width, left]  duration-300`}
		>
			{/* Title and search  */}
			<HeaderSectionMessages handleMenu={handleMenu} />

			<div className='px-5  flex-grow overflow-y-auto'>
				<PinnedSectionMessages />
				<AllSectionMessages />
				<NewMessage />
			</div>
		</section>
	);
};

export default SectionMessages;
