import {
	RiAddLine,
	RiImage2Line,
	RiSendPlaneLine,
	RiMapPinLine,
	RiEmotionHappyLine,
	RiMore2Line,
} from 'react-icons/ri';
import { BiMicrophone } from 'react-icons/bi';
import { useState } from 'react';

const SectionChat = () => {
	return (
		<section className='bg-[#1e1f24] col-span-4 flex flex-col h-full overflow-hidden'>
			{/* Info grupo */}

			<div className='relative flex-grow bg-gradient-to-b from-[#494959] to-[#22222a] overflow-y-auto scroll-bo '>
				<HeaderChat />
				<div className='flex gap-3 flex-col p-8 flex-grow'>
					{/* Recibidor */}
					<div className='flex gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-start gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>Amazon</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-[#32323e] py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									Hi Javier, we need your knowledge to design our future website. 🥳
								</p>
								<span className='ml-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>

					<div className='my-10 w-full flex gap-2 items-center '>
						<hr className='flex-grow' />
						<span className=' text-gray-50 px-1'>Thursday, 10 September</span>
						<hr className='flex-grow' />
					</div>
					{/* enviado */}
					<div className='flex flex-row-reverse gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-end gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>
								Javier Gutierrez <span className='text-gray-400'>You</span>
							</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-purple-900 py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									Hi Amazon, I'm ready to help you. 🥳
								</p>
								<span className='mr-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>

					{/* Recibidor */}

					<div className='flex gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-start gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>Apple</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-[#32323e] py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									No, we urgently need your help... ☹️
								</p>
								<span className='ml-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>
					<div className='flex gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-start gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>Amazon</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-[#32323e] py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>Pleas, we need your help... ☹️</p>
								<span className='ml-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>

					<div className='flex flex-row-reverse gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-end gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>
								Javier Gutierrez <span className='text-gray-400'>You</span>
							</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-purple-900 py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									Hi Amazon, I'm ready to help you. 🥳
								</p>
								<span className='mr-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
							<div className='rounded flex  flex-col gap-1 break-words bg-purple-900 py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									It can help you too, apple is a good company. ✨
								</p>
								<span className='mr-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>
					<div className='flex gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-start gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>Google</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-[#32323e] py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sed
									vero, debitis dignissimos cupiditate, perspiciatis, ad quia molestias ex
									explicabo nobis ab eius excepturi voluptatem incidunt expedita veritatis
									libero earum.
								</p>
								<span className='ml-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>
					<div className='flex gap-4 w-full items-start '>
						<div>
							<div
								src='/business-team.gif'
								alt=''
								className='w-10 h-10 object-cover max-w-none  rounded-full bg-white'
							/>
						</div>

						<div className='flex flex-col items-start gap-2 overflow-hidden w-full'>
							<h4 className='text-gray-300 font-semibold'>Apple</h4>

							<div className='rounded-tr rounded-bl rounded-br flex  flex-col gap-1 break-words bg-[#32323e] py-2 px-4 max-w-full'>
								<p className=' text-gray-300 block '>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cum
									illum magnam rerum temporibus? Veniam, perspiciatis! Eveniet quis
									numquam obcaecati unde deleniti accusamus, corporis aspernatur aliquam
									eaque quaerat in ipsum?
								</p>
								<span className='ml-auto text-sm text-gray-400'>12:00 PM</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SendMessage />
			{/* Mensajes */}
		</section>
	);
};

const HeaderChat = () => {
	const [show, setShow] = useState(false);

	return (
		<div
			className={` bg-[#1e1f2450] backdrop-blur-[5px] sticky ${
				show ? 'bottom-0' : 'top-0'
			}  w-full top-0 flex items-start md:items-center flex-col md:flex-row justify-between gap-4 px-8 py-6 border-b-[.5px] border-b-gray-600`}
		>
			<div className='flex gap-4'>
				<div
					src='/business-team.gif'
					alt='business-team'
					className='w-20 h-20 object-cover rounded-full bg-white'
				/>
				<div className='flex-grow  flex justify-between items-center'>
					<div>
						<h1 className='text-3xl text-gray-200'>Design Team</h1>
						<p className='text-gray-300'>
							60 members <span className='text-green-400'>•</span> 2 online
						</p>
					</div>
				</div>
			</div>

			<div className='hidden md:flex items-center gap-2'>
				<div className='flex'>
					<div
						src='/avatar.gif'
						alt=''
						className='w-8 h-8 object-cover rounded-full bg-white ring-1 ring-gray-300'
					/>
					<div
						src='/male-avatar.gif'
						alt=''
						className='w-8 h-8 object-cover rounded-full -ml-2 bg-white ring-1 ring-gray-300'
					/>
					<div
						src='/female-avatar2.gif'
						alt=''
						className='w-8 h-8 object-cover rounded-full -ml-2 bg-white ring-1 ring-gray-300'
					/>
				</div>
				<button onClick={() => setShow(!show)} className='bg-[#050505] p-3 rounded-full'>
					<RiAddLine className='text-white' />
				</button>
			</div>
		</div>
	);
};

const SendMessage = () => {
	return (
		<div className='bg-[#22222a] w-full px-8 py-4'>
			<form className='relative'>
				<input
					tabIndex={0}
					type='text'
					placeholder='Type a message'
					className='text-gray-300 py-2 pr-20	 md:pr-32 pl-12 bg-[#050505] outline-none w-full rounded-full'
				/>

				<button className='absolute left-4 top-0 bottom-0 flex items-center text-gray-500 text-xl'>
					<BiMicrophone className='hover:text-gray-100 ' />
				</button>

				<div className='absolute flex right-4 top-0 bottom-0 text-xl text-gray-500 gap-2 '>
					<button>
						<RiMore2Line className='hover:text-gray-100 md:hidden ' />
					</button>
					<button>
						<RiEmotionHappyLine className='hover:text-gray-100 hidden md:block ' />
					</button>
					<button>
						<RiImage2Line className=' hover:text-gray-100 hidden md:block ' />
					</button>
					<button>
						<RiMapPinLine className='hover:text-gray-100 hidden md:block ' />
					</button>
					<button>
						<RiSendPlaneLine className='hover:text-gray-100 ' />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SectionChat;
