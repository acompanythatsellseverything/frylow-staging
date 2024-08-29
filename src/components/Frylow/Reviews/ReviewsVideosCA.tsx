import { useRef } from 'react'

const ReviewsVideosCA = ({ link }: { link: string }) => {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null)

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' })
			checkScrollPosition()
		}
	}

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' })
			checkScrollPosition()
		}
	}

	const checkScrollPosition = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				scrollContainerRef.current
			if (scrollLeft <= 0) {
				scrollContainerRef.current.scrollLeft = 1
			} else if (scrollLeft + clientWidth >= scrollWidth) {
				scrollContainerRef.current.scrollLeft = scrollWidth - clientWidth - 1
			}
		}
	}
	return (
		<div className='bg-[#EDF0F9] mt-12 md:mt-12vh'>
			<div className=' flex flex-col items-center justify-center lg:max-w-[170vh] mx-auto w-full  py-[4vh] overflow-hidden'>
				<div className='flex flex-col w-fit relative'>
					<h2 className='font-[600] text-xl lg:text-[5vh] text-center leading-[105%] text-[#3C5EBA]'>
						Watch Frylow in Action.&nbsp;
						<br className='sm:hidden' /> Real Results.&nbsp; Real Kitchens.
					</h2>
					<img
						src={'/images/black_line.webp'}
						className='w-16 lg:w-[12vh] absolute bottom-[-5px] lg:bottom-[-1vh] left-20 lg:left-[47%] hidden md:block'
					/>
				</div>
				<div
					className='flex mt-8 lg:mt-[8vh] gap-6 lg:gap-[3vh] md:flex-wrap overflow-x-scroll md:overflow-x-hidden w-full md:justify-center px-4'
					ref={scrollContainerRef}
				>
					<div className='flex flex-col items-center'>
						<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center text-center  mb-[1vh]'>
							Momo's - <span className='text-[#3C5EBA]'>California</span>
						</h2>
						<iframe
							src='https://player.vimeo.com/video/998636971?h=31fbb57dfd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
							title='How Frylow Works...the Science of Frylow'
							loading='lazy'
							className='rounded-xl border w-56 h-32 lg:h-[28vh] lg:w-[50vh] drop-shadow-lg'
						></iframe>
					</div>
					<div className='flex flex-col items-center'>
						<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center text-center mb-[1vh]'>
							Patrizio - <span className='text-[#3C5EBA]'>Texas</span>
						</h2>
						<iframe
							src='https://player.vimeo.com/video/998639533?h=aa0461f9d6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
							title='Frylow Overview'
							loading='lazy'
							className='rounded-xl border w-56 h-32 lg:h-[28vh] lg:w-[50vh] drop-shadow-lg'
						></iframe>
					</div>
					<div className='flex flex-col items-center'>
						<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center text-center mb-[1vh] whitespace-nowrap'>
							Lockwood Distilling -{' '}
							<span className='text-[#3C5EBA]'>Texas</span>
						</h2>
						<iframe
							// https://vimeo.com/999107777/7fd69da10e
							src='https://player.vimeo.com/video/999107777?h=7fd69da10e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
							title="Frylow: Momo's Restaurant"
							loading='lazy'
							className='rounded-xl border w-56 h-32 lg:h-[28vh] lg:w-[50vh] drop-shadow-lg'
						></iframe>
					</div>
					<div className='flex flex-col items-center'>
						<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center text-center mb-[1vh]'>
							Phil’s Sliders -{' '}
							<span className='text-[#3C5EBA]'>California</span>
						</h2>
						{/* https://vimeo.com/999104358/aa55a04e69 */}
						<iframe
							src='https://player.vimeo.com/video/999104358?h=aa55a04e69&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
							title='Frylow: Patrizio Restaurant'
							loading='lazy'
							className='rounded-xl border w-56 h-32 lg:h-[28vh] lg:w-[50vh] drop-shadow-lg'
						></iframe>
					</div>
					<div className='flex flex-col items-center h-full'>
						<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center text-center mb-[1vh] whitespace-nowrap'>
							Frylow in the News -{' '}
							<span className='text-[#3C5EBA]'>Arizona</span>
						</h2>
						<iframe
							src='https://player.vimeo.com/video/998642214?h=68db30a02b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
							title='Frylow in the News: KVOA'
							loading='lazy'
							className='rounded-xl border w-56 h-32 lg:h-[28vh] lg:w-[50vh] drop-shadow-lg'
						></iframe>
					</div>
				</div>
				<div className='flex justify-center gap-8 mt-6 md:hidden'>
					<button
						onClick={scrollLeft}
						className='bg-gray-100 shadow-md p-2 rounded-full active:bg-gray-200'
					>
						<img src='/images/chevron-down.svg' className='rotate-90' />
					</button>
					<button
						onClick={scrollRight}
						className='bg-gray-100 shadow-md p-2 rounded-full active:bg-gray-200'
					>
						<img src='/images/chevron-down.svg' className='rotate-[-90deg]' />
					</button>
				</div>
				<hr className='border border-blue-500 mt-8 md:mt-[8vh] w-full flex-1' />
				<p className='text-blue-600 font-bold lg:text-[4.5vh] leading-[120%] text-center text-md mt-6'>
					Try Frylow at NO Cost.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO Obligation.
					<br />
					Experience the proven savings yourself.
				</p>
				<div className='w-full lg:p-0 flex justify-center mt-6 lg:mt-[4vh]'>
					<button
						onClick={() =>
							(window.location.href = `${link}cost-savings-estimate-form/`)
						}
						className='text-md bg-[#006A54] text-white rounded-xl w-4/5 md:w-3/6 font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
					>
						Try Frylow in Your Restaurant!
					</button>
				</div>
			</div>
		</div>
	)
}
export default ReviewsVideosCA
