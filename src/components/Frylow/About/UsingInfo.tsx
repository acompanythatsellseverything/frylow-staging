const UsingInfo = () => {
	return (
		<div className=' mt-8 md:mt-16 lg:mt-[8vh]'>
			<h2 className='text-center text-xl lg:text-[4vh] font-semibold'>
				Assumptions for these calculations:
			</h2>
			<div className='flex justify-between md:justify-center gap-2 md:gap-[12vh] lg:mt-[4vh] mt-4'>
				<div>
					<div className='flex'>
						<b className='text-[#416CF6] leading-[60%] text-2xl md:text-[4vh] mr-1 md:mr-[1vh] md:leading-[90%]'>
							•
						</b>{' '}
						<p className='font-medium md:text-[3vh] text-[12px]'>
							Cost of oil per box/pail - <span className='font-bold'>$45</span>
						</p>
					</div>
					<div className='flex'>
						<b className='text-[#416CF6] leading-[60%] text-2xl md:text-[4vh] mr-1 md:mr-[1vh] md:leading-[90%]'>
							•
						</b>{' '}
						<p className='font-medium md:text-[3vh] text-[12px]'>
							Size of Fryer: <span className='font-bold'>50 Ibs</span>
						</p>
					</div>
				</div>
				<div>
					<div className='flex'>
						<b className='text-[#416CF6] leading-[60%] text-2xl md:text-[4vh] mr-1 md:mr-[1vh] md:leading-[90%]'>
							•
						</b>{' '}
						<p className='font-medium md:text-[3vh] text-[12px]'>
							<span className='font-bold'>1.5</span> boxes of oil to fill the
							fryer
						</p>
					</div>
					<div className='flex'>
						<b className='text-[#416CF6] leading-[60%] text-2xl md:text-[4vh] mr-1 md:mr-[1vh] md:leading-[90%]'>
							•
						</b>{' '}
						<p className='font-medium md:text-[3vh] text-[12px]'>
							<span className='font-bold'>4.33</span> weeks per month
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto lg:w-2/3 lg:mt-[2vh]'>
				<div className='flex'>
					<b className='text-[#416CF6] leading-[60%] text-2xl md:text-[4vh] mr-1 md:mr-[1vh] md:leading-[90%]'>
						•
					</b>{' '}
					<p className='font-medium md:text-[3vh] text-[12px]'>
						Savings are average and may slightly vary. They depend upon the
						fry-oil, menu mix, fryer temperature, top-ups, etc.
					</p>
				</div>
			</div>
		</div>
	)
}
export default UsingInfo
