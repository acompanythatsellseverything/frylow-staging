const GeneralBulletPoints = () => {
	return (
		<div className='flex gap-2 md:gap-8 lg:mt-[8vh] mt-6'>
			<img src='/images/about/frylow-template.png' className='w-1/3 md:w-1/2' />
			<div className='flex flex-col justify-evenly w-2/2 lg:w-2/5'>
				<div className='flex'>
					<b className='text-[#416CF6] text-[2vh] mr-1 md:text-[5vh] md:mr-[1vh] leading-[90%]'>
						•
					</b>{' '}
					<p className='font-semibold text-[12px] lg:text-[3.3vh]'>
						The charts below identify typical fry-oil expences and cost savings.
					</p>
				</div>
				<div className='flex'>
					<b className='text-[#416CF6] text-[2vh] mr-1 md:text-[5vh] md:mr-[1vh] leading-[90%]'>
						•
					</b>{' '}
					<p className='font-semibold text-[12px] lg:text-[3.3vh]'>
						ROI is typically only a few months.
					</p>
				</div>
				<div className='flex'>
					<b className='text-[#416CF6] text-[2vh] mr-1 md:text-[5vh] md:mr-[1vh] leading-[90%]'>
						•
					</b>{' '}
					<p className='font-semibold text-[12px] lg:text-[3.3vh]'>
						Stop throwing away soggy fries.
					</p>
				</div>
			</div>
		</div>
	)
}
export default GeneralBulletPoints
