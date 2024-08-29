import { headerReviews, mobileHeaderReviews } from '../../../data/headerReviews'
import { CircleCheck } from 'lucide-react'

const IntroHeader = () => {
	return (
		<div className='flex items-center xl:justify-start justify-center my-2 md:my-8 xl:my-0'>
			<img
				src='/images/small_logo.webp'
				height={60}
				width={60}
				loading='lazy'
				className='w-[7.5vh] h-[7.5vh] md:h-[10vh] md:w-[10vh] drop-shadow-lg'
			/>
			<p className='md:text-2xl lg:text-[2.5vh] font-[600] ml-[2vh]'>
				Guaranteed Fry-Oil <br /> Cost Reduction
			</p>
		</div>
	)
}

const IntroReviews = () => {
	return (
		<div className='flex h-full hustify-between  w-full flex-col'>
			<i className='text-[#416CF6] text-center w-full text-2xl lg:text-[3vh] font-medium md:my-[1vh]'>
				Our Clients say ...
			</i>
			<div className='flex gap-[2vh] mt-[1vh] flex-col xl:flex-row hidden xl:flex'>
				{headerReviews.map((item, index) => (
					<>
						<div className='flex flex-col w-[31%] ' key={index}>
							<b className='text-[2vh] text-center leading-[115%]'>
								{item.company}
							</b>
							<div className='bg-[#EDF0F9] p-[1vh] rounded-lg shadow-md mt-[1vh] h-full flex flex-col justify-between'>
								<div className='flex flex-col gap-[0.01vh] text-[1.5vh]'>
									{item.text}
								</div>
								<a
									className='text-[#416CF6] font-bold text-[1.4vh] mt-[0.5vh]'
									href={`#${item.revId}`}
								>
									<i>Full Review</i>
								</a>
							</div>
							<div className='flex flex-col min-h-[9vh]'>
								<b className='text-center text-[2vh] mt-[1vh]'>{item.name}</b>
								<span className='text-center text-[1.7vh] leading-[120%]'>
									{item.who}
								</span>
							</div>
						</div>
					</>
				))}
			</div>
			{/* Mobile Reviews */}
			<div className='flex gap-6  flex-col xl:flex-row py-[10px] px-[20px] xl:hidden'>
				{mobileHeaderReviews.map((item, index) => (
					<div className='flex items-center justify-between gap-2' key={index}>
						<div className='h-fit flex flex-col w-full md:w-[50%]'>
							<b className='text-md text-center leading-[115%] max-w-[73%] w-full'>
								{item.company}
							</b>
							<div className='flex items-center gap-2'>
								<div className='bg-[#EDF0F9] p-[1vh] rounded-lg shadow-md mt-1 h-full flex flex-col justify-between max-w-[73%] w-full'>
									<div className='flex flex-col gap-[0.01vh] text-sm tracking-[-0.03vh]'>
										{item.text}
									</div>
								</div>
								<div className='flex flex-col w-[30%] items-center'>
									<b className='text-center text-xs'>{item.name}</b>
									<span className='text-center text-[10px] leading-[120%]'>
										{item.who}
									</span>
									<a
										className='text-[#416CF6] font-bold text-xs mt-[0.5vh] text-center'
										href={`#${item.revId}`}
									>
										<i>Full Review</i>
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

const IntroBulletPoints = () => {
	return (
		<>
			<div className='flex flex-col gap-[1.6vh] hidden lg:flex'>
				<div className='flex gap-[1vh] '>
					<CircleCheck
						color='#ffffff'
						fill='#416CF6'
						size={'3vh'}
						className='min-w-[3vh]'
					/>
					<div>
						<p className='font-[600] text-[2vh] tracking-[0.2vh] leading-[115%]'>
							Reduce fry-oil cost up to 50% <br />
							or more!
						</p>
						<i>
							<p className='text-[1.9vh] tracking-[0.2vh] mt-[0.2vh]'>
								Guaranteed oil cost reduction
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
						<p className='font-[600] text-[2vh] tracking-[0.2vh] leading-[115%]'>
							Lighte<span className='tracking-[0vh]'>r,</span> crispie
							<span className='tracking-[0vh]'>r,</span> tastier
							<br /> fried food!
						</p>
						<i>
							<p className='text-[1.9vh] tracking-[0.2vh] mt-[0.2vh]'>
								Absorbs less oil
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
						<p className='font-[600] text-[2vh] tracking-[0.2vh] leading-[115%] '>
							Simple to instal<span className='tracking-[0vh]'>l,</span> us
							<span className='tracking-[0vh]'>e,</span>
							<br /> and maintain
						</p>
						<i>
							<p className='text-[1.9vh] tracking-[0.2vh] mt-[0.2vh]'>
								With no ongoing costs
							</p>
						</i>
					</div>
				</div>
			</div>
			{/* Mobile view */}
			<div className='flex flex-col gap-[1.6vh] lg:hidden px-[20px]'>
				<div className='flex gap-[1vh] '>
					<CircleCheck
						color='#ffffff'
						fill='#416CF6'
						size={'3vh'}
						className='min-w-[3vh]'
					/>
					<div>
						<p className='font-[600] text-md lg:text-[1.9vh] leading-[115%]'>
							Reduce fry-oil cost up to 50% or more!
						</p>
						<i>
							<p className='text-sm lg:text-[1.8vh] mt-[0.2vh]'>
								Guaranteed oil cost reduction
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
						<p className='font-[600] text-md lg:text-[1.9vh] leading-[115%]'>
							Lighter crispier, tastier fried food!
						</p>
						<i>
							<p className='lg:text-[1.8vh] text-sm mt-[0.2vh]'>
								Absorbs less oil
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
						<p className='font-[600] text-md lg:text-[1.9vh] leading-[115%] '>
							Simple to install, use, and maintain
						</p>
						<i>
							<p className='text-sm lg:text-[1.8vh] mt-[0.2vh]'>
								With no ongoing costs
							</p>
						</i>
					</div>
				</div>
			</div>
		</>
	)
}

const IntroFooterImages = () => {
	return (
		<>
			<div className='hidden lg:flex relative'>
				<div className='flex gap-[2vh] mr-[3vh] relative'>
					<img
						src='/images/before.webp'
						loading='lazy'
						className='w-[25vh] h-[26vh] drop-shadow-md rounded-lg'
					/>
					<img
						src='/images/after.webp'
						loading='lazy'
						className='w-[25vh] h-[26vh] drop-shadow-md rounded-lg'
					/>
					<div
						className='bg-white absolute bottom-0 flex items-center justify-center py-[5px] px-4  rounded-lg'
						style={{ left: '50%', transform: 'translateX(-50%)' }}
					>
						<p className='text-blue-700 text-center font-semibold text-[1.8vh] md:text-[2vh]'>
							… in the <i className='font-bold'>same</i> oil !
						</p>
					</div>
				</div>
			</div>
			<div className='lg:hidden w-full'>
				<div className='flex justify-between p-[20px] mt-[0.3vh] mx-auto gap-3 relative'>
					<img
						src='/images/before.webp'
						loading='lazy'
						className='min-h-[5%] min-w-[5%] max-w-[100%] max-h-[100%] drop-shadow-md rounded-lg'
					/>
					<img
						src='/images/after.webp'
						loading='lazy'
						className=' min-h-[5%] min-w-[5%] max-w-[100%] max-h-[100%] drop-shadow-md rounded-lg'
					/>
					<div
						className='bg-white absolute flex items-center justify-center py-[5px] px-4 rounded-lg'
						style={{
							left: '50%',
							transform: 'translateX(-50%)',
							bottom: '20px',
						}}
					>
						<p className='text-blue-700 text-center font-semibold text-[1.8vh] md:text-[2vh]'>
							… in the <i className='font-bold'>same</i> oil !
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

const IntroFooter = () => {
	return (
		<div className='flex justify-between w-full flex-col lg:flex-row flex-wrap'>
			<IntroBulletPoints />
			<IntroFooterImages />
		</div>
	)
}

const Intro = () => {
	return (
		<div className='w-full flex flex-col 2xl:h-[83vh] w-1/2'>
			<IntroHeader />
			<IntroReviews />
			<div className='flex flex-col '>
				<hr className='mx-[15vh] border-[#416CF6] hidden lg:block' />
				<i className='text-[#416CF6] text-center w-full text-2xl lg:text-[2.8vh] font-medium my-[1vh] md:my-[2vh]'>
					Maybe we can help you too ...
				</i>
			</div>

			<IntroFooter />
		</div>
	)
}

export default Intro
