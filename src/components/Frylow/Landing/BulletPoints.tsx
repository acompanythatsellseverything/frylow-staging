import { CircleCheck } from 'lucide-react'

const BulletPoints = () => {
	return (
		<>
			{/* First bulletpoints block */}
			{/* <div className='flex flex-col gap-[2vh]'> */}
			<div className='flex flex-col w-full items-center gap-[2vh]'>
				<div className='flex gap-[1vh]'>
					<CircleCheck
						color='#ffffff'
						fill='#416CF6'
						size={'3vh'}
						className='min-w-[3vh]'
					/>
					<div>
						<p className='font-[600] text-[2vh]'>
							Reduce Fry-oil cost up to 50% or more!
						</p>
						<i>
							<p className='text-[2vh]'>Guaranteed oil cost reduction</p>
						</i>
					</div>
				</div>
				<div className='flex w-full justify-between'>
					<div className='flex flex-col w-1/2 gap-[2vh]'>
						<div className='flex gap-[1vh]'>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<div>
								<p className='font-[600] text-[2vh]'>
									Lighter, crispier, tastier <br />
									fried food
								</p>
								<i>
									<p className='text-[2vh]'>Absorbs less oil</p>
								</i>
							</div>
						</div>
					</div>
					<div className='flex flex-col w-[40%] gap-[2vh]'>
						{/* <div className='flex gap-[1vh]'>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<div>
								<p className='font-[600] text-[2vh]'>
									Not an Oil Filter or a <br />
									Stabilizing Powder
								</p>
							</div>
						</div> */}
						<div className='flex gap-[1vh]'>
							<CircleCheck
								color='#ffffff'
								fill='#416CF6'
								size={'3vh'}
								className='min-w-[3vh]'
							/>
							<div>
								<p className='font-[600] text-[2vh]'>
									Simple to install, use, <br />
									and maintain
								</p>
								<i>
									<p className='text-[2vh]'>With no ongoing costs</p>
								</i>
							</div>
						</div>
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
						<p className='font-[600] text-[2vh]'>5-year Warranty</p>
						<i>
							<p className='text-[2vh] max-w-[46vh]'>
								Works with any oil, on any food, <br />
								in any restaurant
							</p>
						</i>
					</div>
				</div>
			</div>
		</>
	)
}

export default BulletPoints
