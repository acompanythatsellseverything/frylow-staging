import { MoveDown, MoveRight, MoveUp } from 'lucide-react'

const HomeBulletpoints = ({
	wrapperClass = 'flex flex-col justify-between w-full mt-4 lg:mt-0 h-full gap-3',
}) => {
	return (
		<div className={wrapperClass}>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-sm md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D]'>
						Reduce Fry-Oil cost up to 50% or more
					</p>
					<p className='text-sm  lg:text-[2.1vh]  text-[#000F3D] leading-[100%]'>
						<i>Guaranteed oil cost reduction</i>
					</p>
				</div>
			</div>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-sm md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D]'>
						Lighter, Crispier, and Tastier fried food
					</p>
					<p className='text-sm lg:text-[2.1vh]  text-[#000F3D] leading-[100%]'>
						<i>Absorbs less oil</i>
					</p>
				</div>
			</div>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-sm md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D] leading-[100%]'>
						Simple to Install, Use and Maintain with
						<br className='hidden lg:block' /> <i>no</i> ongoing costs ...
						5-year Warranty
					</p>
				</div>
			</div>
		</div>
	)
}

const IntroImages = ({ link }: { link: string }) => {
	return (
		<section className='lg:max-w-[153vh] mx-auto xl:h-[calc(100vh-18vh)] flex flex-col items-center lg:px-[3vh] px-6 justify-evenly w-full gap-5 xl:gap-0'>
			<div className='flex w-full justify-between gap-[3vh] md:flex-row flex-col items-center'>
				<img
					src='/images/frylow-in.webp'
					className='md:w-[30%] hidden md:block'
					loading='lazy'
					alt='Logo'
				/>
				<HomeBulletpoints />
				<img
					src='/images/mc.webp'
					alt='Master Chef logo'
					className='h-[18vh] xl:mr-[14.5vh] drop-shadow-lg hidden md:block'
					loading='lazy'
				/>
			</div>
			{/* Desktop */}
			<p className='text-[#0D2A84] font-bold text-md md:text-2xl lg:text-[3vh] leading-[120%] text-center hidden md:block'>
				Try Frylow at NO Cost.&nbsp;&nbsp;NO Obligation.&nbsp;&nbsp;Experience
				the proven savings yourself.
			</p>
			<div className='flex w-full justify-between  items-center mt-8 md:mt-0 hidden md:flex '>
				<img
					src='/images/home/before.webp'
					className='w-[30%] drop-shadow-lg'
					loading='lazy'
					alt='Logo'
				/>
				<MoveRight color='#F64A41' className='size-[6vh]' />
				<div className='w-[23%] flex flex-col items-center h-full justify-center gap-[2vh]'>
					<img
						src='/images/home/process-test.webp'
						className='drop-shadow-lg'
						loading='lazy'
						alt='Logo'
					/>
					<p className='text-blue-700 font-bold text-center font-semibold text-[2.3vh]  leading-[85%]'>
						… in the <i className='font-bold'>same</i> oil !
					</p>
				</div>

				<MoveRight color='#F64A41' className='size-[6vh]' />
				<img
					src='/images/home/after.webp'
					className='w-[30%] drop-shadow-lg'
					loading='lazy'
					alt='Logo'
				/>
			</div>
			{/* Desktop */}
			{/* Mobile */}
			<div className=' flex flex-col-reverse md:flex-col lg:gap-8 md:hidden'>
				<p className='text-[#0D2A84] font-bold text-md md:text-2xl lg:text-[3vh] leading-[120%] text-center mt-4'>
					Try Frylow at NO Cost.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO Obligation.
					<br />
					Experience the proven savings yourself.
				</p>
				<div className='flex flex-col items-center relative gap-1'>
					<div className='flex w-full justify-between gap-[2vh] items-center'>
						<img
							src='/images/home/before-mobile.webp'
							className='md:w-[35%] w-[45%] drop-shadow-lg'
							loading='lazy'
							alt='Logo'
						/>

						<img
							src='/images/home/after-mobile.webp'
							className='md:w-[35%] w-[45%] drop-shadow-lg'
							loading='lazy'
							alt='Logo'
						/>
					</div>
					<div className='flex justify-center gap-4 w-full '>
						<MoveDown className='size-[3.3vh] ' color='#F64A41' />
						<p className='text-blue-700 text-center font-semibold mt-[0.5vh]'>
							… in the <i className='font-bold'>same</i> oil !
						</p>
						<MoveUp className='size-[3.3vh] ' color='#F64A41' />
					</div>
					<div className='flex items-center justify-between gap-1'>
						<img
							src='/images/home/process-test.webp'
							className='w-[45%] drop-shadow-lg'
							loading='lazy'
							alt='Logo'
						/>
						<MoveRight color='#F64A41' className='size-[4vh]' />
						<img
							src='/images/frylow-in.webp'
							className='w-[45%] drop-shadow-lg'
							loading='lazy'
							alt='Logo'
						/>
					</div>
					<img
						src='/images/mc.webp'
						alt='Master Chef logo'
						className='drop-shadow-lg w-1/4 mt-2'
						loading='lazy'
					/>
				</div>
			</div>
			{/* Mobile */}
			<div className='w-full md:w-1/2'>
				<button
					onClick={() => (location.href = `${link}cost-savings-estimate-form/`)}
					className='text-md bg-[#006A54] text-white rounded-xl w-full font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
				>
					Get&nbsp;Frylow&nbsp;SAVINGS&nbsp;Estimate
				</button>
			</div>
		</section>
	)
}

export default IntroImages
export { HomeBulletpoints }
