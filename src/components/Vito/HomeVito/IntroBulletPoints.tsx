const IntroBulletPoints = () => {
	return (
		<div className='flex justify-between max-w-[150vh] mx-auto items-center relative'>
			<div className='w-2/3 flex flex-col lg:gap-[2vh] lg:mt-[10vh]'>
				<div className='flex gap-[1vh]'>
					<img
						src='/images/kaplya.png'
						className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
						loading='lazy'
					/>
					<div className='flex flex-col gap-[0vh]'>
						<p className='text-[12px] md:text-[18px] lg:text-[2.3vh] font-bold text-[#000F3D]'>
							Save up to 50% on your fry-oil cost
						</p>
						<p className='text-sm  lg:text-[2.1vh]  text-[#000F3D] leading-[3vh] italic'>
							Enjoy more savings with a fry-oil conditioner
						</p>
					</div>
				</div>
				<div className='flex gap-[1vh]'>
					<img
						src='/images/kaplya.png'
						className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
						loading='lazy'
					/>
					<div className='flex flex-col'>
						<p className='text-[12px] md:text-[18px] lg:text-[2.3vh] font-bold text-[#000F3D]'>
							Greatly improve all fried food quality with filtering
						</p>
						<p className='text-sm  lg:text-[2.1vh]  text-[#000F3D] leading-[3vh] italic'>
							Consistently clear oil within 5 minutes using 5-micron filter
							media
						</p>
					</div>
				</div>
				<div className='flex gap-[1vh]'>
					<img
						src='/images/kaplya.png'
						className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
						loading='lazy'
					/>
					<div className='flex flex-col'>
						<p className='text-[12px] md:text-[18px] lg:text-[2.3vh] font-bold text-[#000F3D]'>
							Save labor costs with in-the-fryer installation
						</p>
						<p className='text-sm  lg:text-[2.1vh]  text-[#000F3D] leading-[3vh] italic'>
							Just drop Vito into the fryer, then let it work its magic in 5
							minutes
						</p>
					</div>
				</div>
			</div>
			<img
				src='/images/Vito/home/machine.png'
				className='lg:h-[50vh] absolute right-0 top-0'
				loading='lazy'
			/>
		</div>
	)
}

export default IntroBulletPoints
