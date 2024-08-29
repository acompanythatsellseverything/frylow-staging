import { CircleCheck } from 'lucide-react'

const ConsumersCare = () => {
	return (
		<div>
			<div className=' md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh] lg:max-w-[166vh] mx-auto px-[3vh] md:px-0'>
				<h2 className='font-[600] text-xl lg:text-[5vh] text-center '>
					Why Consumers Care
				</h2>
				<div className='flex w-full lg:mt-[8vh] mt-4 justify-between h-full flex-col lg:flex-row'>
					<div className=' flex flex-col gap-2 md:gap-[2.6vh] h-full '>
						<div className='flex gap-[1vh] '>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<p className='font-[600] leading-[160%] md:leading-[103%] text-[16px] md:text-[3.2vh]'>
								Lighter, crispier, and tastier fried food.
							</p>
						</div>
						<div className='flex gap-[1vh] '>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<p className='font-[600]  leading-[160%] md:leading-[103%] text-[16px] md:text-[3.2vh]'>
								Lower fat and calories.
							</p>
						</div>
						<div className='flex gap-[1vh] '>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<p className='font-[600]  leading-[160%] md:leading-[103%] text-[16px] md:text-[3.2vh]'>
								Less oily/soggy food.
							</p>
						</div>
						<div className='flex gap-[1vh] '>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<div>
								<p className='font-[600] text-[16px] md:text-[3.2vh] leading-[160%] md:leading-[103%] '>
									Reduced carbon footprint.
								</p>
								<i>
									<p className=' mt-[0.2vh] text-[14px] md:text-[2.6vh] font-medium tracking-[-0.03vh]'>
										Less oil, less energy.
									</p>
								</i>
							</div>
						</div>
						<div className='flex gap-[1vh] '>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<div>
								<p className='font-[600] text-[16px] md:text-[3.2vh] leading-[160%] md:leading-[103%]'>
									Overall healthier cooking process.
								</p>
								<i>
									<p className=' mt-[0.2vh] text-[14px] md:text-[2.6vh] font-medium md:tracking-[-0.05vh]'>
										Faster cooking at lower temperatures, with reduced harmful
										acrylamides.
									</p>
								</i>
							</div>
						</div>
					</div>
					<div className='w-fit flex mt-4 md:mt-0'>
						<img
							src='/images/benefits/consumers.png'
							className='md:h-[34vh] self-end'
						/>
					</div>
				</div>
			</div>
			{/* <span id='experts'></span> */}
		</div>
	)
}

export default ConsumersCare
