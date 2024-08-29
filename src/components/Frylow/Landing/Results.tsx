import { useRef } from 'react'

const Results = () => {
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
		<section className='bg-[#EDF0F9]'>
			<div className='lg:max-w-[170vh] mx-auto py-[4vh] w-full px-[3vh]'>
				<div className='flex flex-col items-center'>
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
						className='flex mt-8 lg:mt-[8vh] gap-6 lg:gap-[3vh] md:flex-wrap overflow-x-scroll w-full md:justify-center'
						ref={scrollContainerRef}
					>
						<div className='flex flex-col items-start'>
							<h2 className='font-[800] text-md lg:text-[2.5vh] h-16 lg:h-[12vh] flex items-center w-48 lg:w-[29vh]'>
								How Frylow Works ... <br />
								the Science of Frylow
							</h2>
							{/* 1.https://vimeo.com/manage/videos/998645145/63fbe110db/interactivity */}
							<iframe
								src='https://player.vimeo.com/video/998645145?h=63fbe110db&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title='How Frylow Works...the Science of Frylow'
								loading='lazy'
								className='rounded-xl border w-56 h-32 lg:h-[18vh] lg:w-[30vh] drop-shadow-lg'
							></iframe>
						</div>
						<div className='flex flex-col items-center'>
							<h2 className='font-[800] text-md lg:text-[2.5vh] w-48 lg:w-[29vh] text-center h-16 lg:h-[12vh] flex items-center justify-center'>
								Frylow Overview
							</h2>
							{/* https://vimeo.com/manage/videos/998644311/5b173f7a04 */}
							<iframe
								src='https://player.vimeo.com/video/998644311?h=5b173f7a04&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title='Frylow Overview'
								loading='lazy'
								className='rounded-xl border w-56 h-32 lg:h-[18vh] lg:w-[30vh] drop-shadow-lg'
							></iframe>
						</div>
						<div className='flex flex-col items-center'>
							<h2 className='font-[800] text-md lg:text-[2.5vh]  justify-center w-48 lg:w-[29vh] text-center flex-col h-16 lg:h-[12vh] flex items-center'>
								Client Fan of Frylow
								<br />
								<span className='text-[#3C5EBA]'>Momo’s</span>
							</h2>
							{/* https://vimeo.com/manage/videos/998645844/1f326eaceb */}
							<iframe
								src='https://player.vimeo.com/video/998645844?h=1f326eaceb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title="Frylow: Momo's Restaurant"
								loading='lazy'
								className='rounded-xl border w-56 h-32 lg:h-[18vh] lg:w-[30vh] drop-shadow-lg'
							></iframe>
						</div>
						<div className='flex flex-col items-center'>
							<h2 className='font-[800] text-md lg:text-[2.5vh]  w-48 lg:w-[29vh] justify-center text-center h-16 lg:h-[12vh] flex items-center flex-col	'>
								Client Fan of Frylow
								<br /> <span className='text-[#3C5EBA]'>Patrizio</span>
							</h2>
							{/* https://vimeo.com/manage/videos/998645897/f55585857d */}
							{/* 998645897/f55585857d */}
							<iframe
								src='https://player.vimeo.com/video/998645897?h=f55585857d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title='Frylow: Patrizio Restaurant'
								loading='lazy'
								className='rounded-xl border w-56 h-32 lg:h-[18vh] lg:w-[30vh] drop-shadow-lg'
							></iframe>
						</div>
						<div className='flex flex-col items-center h-full'>
							<h2 className='font-[800] text-md lg:text-[2.5vh] w-48 lg:w-[29vh] justify-center text-center h-16 lg:h-[12vh] flex items-center flex-col'>
								Frylow in the News
								<br />
								<span className='text-[#3C5EBA]'>KVOA</span>
							</h2>
							{/* https://vimeo.com/manage/videos/998645954/f89122ff09 */}
							<iframe
								src='https://player.vimeo.com/video/998645954?h=f89122ff09&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title='Frylow in the News: KVOA'
								loading='lazy'
								className='rounded-xl border w-56 h-32 lg:h-[18vh] lg:w-[30vh] drop-shadow-lg'
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
				</div>
			</div>
		</section>
	)
}

export default Results
