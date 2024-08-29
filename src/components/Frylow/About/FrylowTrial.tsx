const FrylowTrial = () => {
	return (
		<div>
			<div className='flex flex-col w-fit mx-auto'>
				<h2 className='font-[600] text-2xl lg:text-[5.3vh] text-center  md:mt-0'>
					Free Frylow Trial
				</h2>
				<img
					src={'/images/blue_line.webp'}
					className='w-16 lg:w-[11vh] self-start  lg:mt-[1vh]'
					loading='lazy'
				/>
			</div>
			<i className='text-lg md:text-[4vh] text-center'>
				<p className='mt-1 md:mt-[1vh] text-[#3C5EBA] font-medium'>
					See and Taste the difference yourself !
				</p>
			</i>
			<div className='flex justify-between lg:mt-[8vh] mt-4'>
				<div className='w-full md:w-1/2 flex flex-col justify-between'>
					<p className='font-bold text-lg md:text-[4vh]'>
						Frylow trials will demonstrate
					</p>
					<div className='lg:mt-[3vh] flex flex-col gap-[1vh] mt-3 lg:ml-[2vh]'>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-[1vh] leading-[50%] md:leading-[110%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3.3vh]'>
								Extention of your fry-oil life.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-[1vh] leading-[50%] md:leading-[110%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3.3vh]'>
								Better quality/tasting fried food.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-[1vh] leading-[50%] md:leading-[110%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3.3vh] tracking-tight'>
								Cooking at lower temperatures - 335/340°.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-[1vh] leading-[50%] md:leading-[110%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3.3vh]'>
								Quicker frying time.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-[1vh] leading-[50%] md:leading-[110%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3.3vh]'>
								Simple to install, use and maintain.
							</p>
						</div>
					</div>
				</div>
				<div className='w-1/2 flex justify-end hidden md:flex'>
					<img
						src='/images/about/fryer-hand.png'
						className='h-fit md:h-[40vh] drop-shadow-xl '
					/>
				</div>
			</div>
			<img
				src='/images/about/fryer-hand.png'
				className='md:hidden drop-shadow-xl mt-4'
			/>
			<div className='bg-gradient-to-bl from-[#78D39B] via-[#3C5EBA] to-[#78D39B] lg:py-[2vh] lg:px-[2.5vh] rounded-xl lg:my-[8vh] my-5 py-2'>
				<p className='text-white font-bold text-md lg:text-[4vh] text-center'>
					Minimal effort required
				</p>
				<p className='text-white font-medium lg:text-[3.5vh] text-[12px] text-center md:mt-[1vh]'>
					A trial can start within one week of shipping Frylow devices.
				</p>
			</div>
		</div>
	)
}
export default FrylowTrial
