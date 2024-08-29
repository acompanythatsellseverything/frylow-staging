import { MoveRight } from 'lucide-react'
import WhatIsFrylow from './WhatIsFrylow'

const FrylowGeneralInfo = ({ img }: { img: string }) => {
	return (
		<div className='lg:pt-[10vh]'>
			<div className='bg-[#EDF0F9] p-3 lg:px-[4vh] lg:py-[5vh] rounded-xl  lg:max-w-[166vh] mx-auto'>
				<WhatIsFrylow img={img} />
				<div>
					<div className='mt-6 md:mt-12vh flex items-center gap-1 md:gap-[3vh] hidden md:flex lg:h-[60vh]'>
						{/* Card 1 */}
						<div className='md:w-1/3'>
							<div>
								<p className='font-bold text-blue-600 text-[12px] lg:text-[3vh] text-center'>
									<i>Clumpy</i> Oil Molecules
								</p>
								<img
									src='/images/about/before-molecular.png'
									className='w-full mt-2 md:mt-[1vh]'
								/>
							</div>
						</div>
						{/* Arrow Right */}
						<MoveRight
							color='red'
							className='size-[24] md:size-[10vh] absolute md:static left-[38%]'
						/>
						{/* Image */}
						<div className='w-1/5 md:w-1/4 relative flex justify-center items-center'>
							<img src='/images/about/frylow-stage.png' className='' />
							<p className='text-blue-700 text-center font-semibold text-[2.3vh] leading-[85%] absolute -bottom-12'>
								… in the <i className='font-bold'>same</i> oil !
							</p>
						</div>

						{/* Arrow Right */}
						<MoveRight
							color='red'
							className='size-[24] md:size-[10vh] absolute md:static left-[57%]'
						/>
						{/* Card 2 */}
						<div className='md:w-1/3'>
							<div>
								<p className='font-bold text-blue-600 text-[12px] lg:text-[3vh] text-center'>
									<i>Efficient</i> Oil Molecules
								</p>
								<img
									src='/images/about/after-molecular.png'
									className='w-full mt-2 md:mt-[1vh]'
								/>
							</div>
						</div>
						{/*  */}
					</div>
					<img
						src='/images/about/frylow-stages.webp'
						className='mt-8 md:hidden'
					/>
				</div>

				<div className='flex justify-between mt-4 md:mt-0'>
					{/* part one */}
					<div className='w-2/5 md:w-1/3'>
						<div className='lg:mt-[3vh] flex flex-col gap-[1vh] '>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh]'>
									Oil oxidation <i>(loss of electrons)</i> thickens the fry-oil.
									This leads to longer cooking times and darker food color with
									slower heat transfer.
								</p>
							</div>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh]'>
									Soggy fries (and other items) result.
								</p>
							</div>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh]'>
									Harmful byproducts (Acrylamide, etc.) <br /> are produced.
								</p>
							</div>
						</div>
					</div>
					{/* part two */}
					{/* w-[28%] */}
					<div className='w-2/5 md:w-[29%]'>
						<div className='lg:mt-[3vh] flex flex-col gap-[1vh]'>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]  tracking-tighter'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh] tracking-tighter'>
									Thinner fry-oil improves heat transfer to the fried food and
									enables faster cooking times at{' '}
									<span style={{ whiteSpace: 'nowrap' }}>
										lower temperatures.
									</span>
								</p>
							</div>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh]'>
									Less oil absorbed by the food creates tastier and crispier
									results - <br className='hidden lg:block' /> No more soggy
									fries, etc.
								</p>
							</div>
							<div className='flex'>
								<b className='text-[#416CF6] text-[3vh] mr-[0.5vh] md:mr-[1vh] leading-[50%] md:leading-[90%]'>
									•
								</b>{' '}
								<p className='font-semibold text-[12px] md:text-[2vh] tracking-tighter'>
									Fry-oil life extention by up to 50% and more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FrylowGeneralInfo
