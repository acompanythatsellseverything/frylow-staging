import { MoveRight } from 'lucide-react'

const HomeBulletpoints = () => {
	return (
		<div className='flex flex-col justify-between w-full  mt-8 lg:mt-0'>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-md md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D]'>
						Reduce Fry-Oil cost up to 50% or more
					</p>
					<p className='text-sm  lg:text-[2.1vh]  text-[#000F3D] leading-[100%]'>
						Guaranteed oil cost reduction{' '}
					</p>
				</div>
			</div>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-md md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D] leading-[120%]'>
						Lighter, Crispier, and Tastier fried food
					</p>
					<p className='text-sm lg:text-[2.1vh]  text-[#000F3D] leading-[100%]'>
						Absorbs less oil
					</p>
				</div>
			</div>
			<div className='flex gap-[1vh]'>
				<img
					src='/images/kaplya.png'
					className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
				/>
				<div className='flex flex-col'>
					<p className='text-md md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D] leading-[100%]'>
						Simple to Install, Use and Maintain with
						<br /> no ongoing costs ... 5-year Warranty
					</p>
				</div>
			</div>
		</div>
	)
}

const IntroImagesTest = () => {
	return (
		<section className='lg:max-w-[153vh] mx-auto xl:h-[calc(100vh-18vh)] flex flex-col items-center lg:px-[3vh] px-6 justify-evenly w-full'>
			<div className='flex  w-full justify-between gap-[3vh] md:flex-row flex-col'>
				<img
					src='/images/frylow-in.png'
					className='md:w-[30%] hidden md:block'
					loading='lazy'
					alt='Logo'
				/>
				<HomeBulletpoints />
			</div>
			{/* Desktop */}
			<p className='text-[#0D2A84] font-bold text-md md:text-2xl lg:text-[3vh] leading-[120%] text-center hidden md:block'>
				Try Frylow at NO Cost.&nbsp;&nbsp;NO Obligation.&nbsp;&nbsp;Experience
				the proven savings yourself.
			</p>
			<div className='flex w-full justify-between  items-center mt-8 lg:mt-0 hidden md:flex '>
				<img
					src='/images/home/before.webp'
					className='w-[30%]'
					loading='lazy'
					alt='Logo'
				/>
				<MoveRight color='#F64A41' className='size-[6vh]' />
				<img
					src='/images/home/process-test.png'
					className='w-[25%]'
					loading='lazy'
					alt='Logo'
				/>
				<MoveRight color='#F64A41' className='size-[6vh]' />
				<img
					src='/images/home/after.webp'
					className='w-[30%]'
					loading='lazy'
					alt='Logo'
				/>
			</div>
			{/* Desktop */}
			{/* Mobile */}
			<div className=' flex flex-col-reverse md:flex-col lg:gap-8 md:hidden'>
				<p className='text-[#0D2A84] font-bold text-md md:text-2xl lg:text-[3vh] leading-[120%] text-center mt-8'>
					Try Frylow at NO Cost.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO Obligation.
					<br />
					Experience the proven savings yourself.
				</p>
				<div className='flex w-full justify-center gap-[3vh] items-center mt-8 lg:mt-0'>
					<img
						src='/images/home/before.webp'
						className='md:w-[35%] w-1/2'
						loading='lazy'
						alt='Logo'
					/>
					<img
						src='/images/home/after.webp'
						className='md:w-[35%] w-1/2'
						loading='lazy'
						alt='Logo'
					/>
				</div>
			</div>
			{/* Mobile */}
			<img
				src='/images/frylow-in.png'
				className='w-2/3 md:hidden mt-8'
				loading='lazy'
				alt='Logo'
			/>
			<div className='w-full md:w-1/2'>
				<button
					type='submit'
					className='text-md bg-[#006A54] text-white rounded-xl w-full font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white mt-8 lg:mt-0'
				>
					Get&nbsp;Frylow&nbsp;SAVINGS&nbsp;Estimate
				</button>
			</div>
		</section>
	)
}

export default IntroImagesTest
