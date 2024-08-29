const TrialExpectation = () => {
	return (
		<div className=' lg:mt-[8vh]'>
			<p className='font-bold text-xl lg:text-[4vh] text-center'>
				What you should expect for a trial
			</p>
			<div className='flex  lg:mt-[4vh]'>
				<div className='flex'>
					<img
						src='/images/about/frylow-man.png'
						className='h-[55vh] drop-shadow-lg hidden md:block'
					/>
				</div>
				<div className='flex flex-col justify-between md:ml-[3vh] mt-4 md:mt-0 '>
					<div className=' flex flex-col justify-between h-full lg:ml-[2.3vh] gap-2 md:gap-0'>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh]'>
								Frylow devices will match your fryer size.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh]'>
								1 device per fryer in your commercial kitchen.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh]'>
								“Best practices” training for all staff involved{' '}
								<br className='hidden md:block' />
								with the deep frying process.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh] tracking-tight'>
								Frylow devices are shipped free-of-charge
								<br className='md:hidden' /> via FedEx.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh] tracking-tight'>
								Digital and written directions are included.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh] tracking-tight'>
								Your ROI will be calculated prior to the trial.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh]'>
								1-2 week trial duration - no cost.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh] '>
								Decision maker/s to be involved with the trial.
							</p>
						</div>
						<div className='flex'>
							<b className='text-[#416CF6] text-[4vh] mr-2 md:mr-[1vh] leading-[50%] md:leading-[90%]'>
								•
							</b>{' '}
							<p className='font-semibold text-md md:text-[3vh]'>
								Weekly Zoom meetings to review progress and resolve questions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<img
				src='/images/about/frylow-man.png'
				className='drop-shadow-lg mt-4 md:hidden'
			/>
		</div>
	)
}

export default TrialExpectation
