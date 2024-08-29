import { useRef } from 'react'

import ReviewCard from './ReviewCard'
import { reviews } from '../../../data/vito/reviews'

const Reviews = () => {
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
				scrollContainerRef.current.scrollLeft = 1 // Set to 1 to avoid reaching exact 0 which might cause disappearance
			} else if (scrollLeft + clientWidth >= scrollWidth) {
				scrollContainerRef.current.scrollLeft = scrollWidth - clientWidth - 1 // Set to slightly less than max to avoid disappearance
			}
		}
	}

	return (
		<section
			className='lg:max-w-[166vh] mx-auto mt-10 lg:mt-12vh pb-[8vh] w-full px-5 lg:px-[3vh]'
			id='reviews'
		>
			<div className='flex items-center justify-center md:gap-6 gap-2'>
				{/* <h2 className='font-[600] text-xl lg:text-[5vh] text-center leading-[105%] text-[#416CF6]'>
					Proven Savings <br className='sm:hidden' />-{' '}
					<i>what VITO clients say</i>
				</h2>
				<img
					src='/images/mc.webp'
					alt='Master Chef logo'
					className='h-20 md:h-[12vh]  drop-shadow-lg'
					loading='lazy'
				/> */}
				<h2 className='font-[600] text-xl lg:text-[5vh] text-center leading-[105%]'>
					Reviews - <i>what VITO Clients say</i>
				</h2>
			</div>
			<div
				className='flex mt-8 lg:mt-[8vh] md:justify-center lg:justify-between w-full md:flex-wrap gap-[2vh] overflow-x-scroll md:overflow-hidden'
				ref={scrollContainerRef}
			>
				{reviews.map((review, index) => (
					<ReviewCard
						company={review.company}
						text={review.text}
						name={review.name}
						who={review.who}
						key={index}
						id={review.id}
						img={review.img}
					/>
				))}
			</div>
			<div className='flex justify-center gap-8 mt-5 md:hidden'>
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
		</section>
	)
}

export default Reviews
