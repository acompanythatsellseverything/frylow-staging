import { CircleCheck } from 'lucide-react'

const BulletPoints = () => {
	return (
		<div className='md:w-1/2 flex flex-col gap-2 md:gap-[2.1vh]  tracking-[-0.1vh] '>
			<div className='flex gap-[1vh]'>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600] md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Cost Savings! 50% or more on <br className='sm:hidden' />
					fry-oil use.
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
					<p className='font-[600] text-[16px] md:text-[2.6vh] leading-[115%] '>
						Better quality food - crispier, lighter, tastier.
					</p>
					<i>
						<p className=' mt-[0.2vh] text-[14px] md:text-[2vh] font-medium'>
							Prevents flavor transfer when cooking different
							<br className='sm:hidden' /> food items in the same fryer.
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
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Simple to install, use, and maintain.
				</p>
			</div>
			<div className='flex gap-[1vh] '>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					No recurring costs.
				</p>
			</div>
			<div className='flex gap-[1vh] '>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					5 - Year warranty.
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
					<p className='font-[600] md:leading-[103%] text-[16px] md:text-[2.6vh]'>
						Reduced energy costs cooking with <br className='sm:hidden' />
						lower temperatures.
					</p>
					<i>
						<p className=' mt-[0.2vh] text-[14px] md:text-[2vh] font-medium'>
							The “thinner oil” permits quicker heat transfer
							<br className='sm:hidden' /> to the food.
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
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Lower labor costs with fewer oil changes.
				</p>
			</div>
			<div className='flex gap-[1vh] '>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Reduces smoke. Provides safer air quality
					<br className='sm:hidden' /> for employees.
				</p>
			</div>
			<div className='flex gap-[1vh] '>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600] md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Works with any oil, on any food, in
					<br className='sm:hidden' /> any restaurant.
				</p>
			</div>
			<div className='flex gap-[1vh] '>
				<CircleCheck
					color='#ffffff'
					fill='#416CF6'
					size={'3vh'}
					className='min-w-[3vh]'
				/>
				<p className='font-[600]  md:leading-[103%] text-[16px] md:text-[2.6vh]'>
					Reduced carbon footprint.
				</p>
			</div>
		</div>
	)
}

export default BulletPoints
