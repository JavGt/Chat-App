import { RiArrowDownSLine, RiAddLine } from 'react-icons/ri';

const HeaderAside = () => {
	return (
		<div tabIndex={0} className='flex justify-center my-5  flex-col items-center p-8'>
			<div
				src='male-avatar.gif'
				alt=''
				className='w-28 h-28 object-cover rounded-full bg-white'
			/>
			<div className='text-center mt-5'>
				<h2 className='text-2xl font-semibold text-white'>Javier Gutierrez</h2>
				<p className='text-gray-400 '>@Ahmed Elsayed </p>
			</div>
		</div>
	);
};

const ViewSocial = () => {
	return (
		<div className='px-8 py-2'>
			<div className='flex  justify-between'>
				<h4 className='text-gray-500 text-lg font-semibold'>Social Networks</h4>
				<button type='button'>
					<RiArrowDownSLine className='text-gray-500 text-lg ' />
				</button>
			</div>
			<hr className='my-3 border-gray-500' />
			<div className='flex flex-col gap-4'>
				<a
					href='https://www.instagram.com/javgttz/'
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-4'
				>
					<img src='instagram.png' alt='' className='w-10 h-10' />
					<div>
						<h4 className='text-gray-300 font-semibold '>Instagram</h4>
						<p className='text-gray-500 font-normal text-sm'>@Ahmed Elsayed</p>
					</div>
				</a>
				<a
					href='https://github.com/JavGt'
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-4'
				>
					<img src='github.png' alt='' className='w-10 h-10' />
					<div>
						<h4 className='text-gray-300 font-semibold '>GitHub</h4>
						<p className='text-gray-500 font-normal text-sm'>@JavGt</p>
					</div>
				</a>
				<a
					href='https://www.facebook.com/JavGttz/'
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-4'
				>
					<img src='facebook.png' alt='' className='w-10 h-10' />
					<div>
						<h4 className='text-gray-300 font-semibold '>Facebook</h4>
						<p className='text-gray-500 font-normal text-sm'>Javier Gutierrez</p>
					</div>
				</a>
				<div className='flex items-center gap-4'>
					<div>
						<h4 className='text-purple-400 text-sm font-semibold '>
							View All Social Networks
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

const ViewMembers = () => {
	return (
		<div className='px-8 py-2'>
			<div className='flex justify-between'>
				<h4 className='text-gray-500 text-lg font-semibold'>Members</h4>
				<RiArrowDownSLine className='text-gray-500 text-lg ' />
			</div>
			<hr className='my-3 border-gray-500' />

			<div className='flex flex-col gap-4'>
				<div className='flex items-center gap-4'>
					<div className='w-10 h-10 rounded-full grid place-content-center bg-[#11111150]'>
						<RiAddLine className='text-purple-400 text-2xl' />
					</div>
					<div>
						<h4 className='text-purple-400 font-semibold '>Add Member</h4>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div src='male-avatar.gif' alt='' className='w-10 h-10 rounded-full bg-white' />
					<div>
						<h4 className='text-gray-300 font-semibold '>Ahmed Elsayed</h4>
						<p className='text-gray-500 font-normal text-sm'>+201000000000</p>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div
						src='female-avatar.gif'
						alt=''
						className='w-10 h-10 rounded-full bg-white'
					/>
					<div>
						<h4 className='text-gray-300 font-semibold '>Ahmed Elsayed</h4>
						<p className='text-gray-500 font-normal text-sm'>+201000000000</p>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div
						src='female-avatar2.gif'
						alt=''
						className='w-10 h-10 rounded-full bg-white'
					/>
					<div>
						<h4 className='text-gray-300 font-semibold '>Ahmed Elsayed</h4>
						<p className='text-gray-500 font-normal text-sm'>+201000000000</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const SectionAside = () => {
	return (
		<section className='hidden  lg:block bg-[#22222A] col-span-2 overflow-y-auto'>
			<HeaderAside />

			<ViewSocial />

			<ViewMembers />
		</section>
	);
};

export default SectionAside;
