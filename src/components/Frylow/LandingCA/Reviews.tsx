import React, { useEffect, useRef, useState } from 'react'
import { canadianReviews } from '../../../data/canadianReviews'
import { useLocation } from 'react-router-dom'
import { Star } from 'lucide-react'

const ReviewCard: React.FC<any> = ({ company, text, name, who, id, img }) => {
	useEffect(() => {
		const currentUrl = window.location.href
		if (currentUrl.includes('#')) {
			const newUrl = currentUrl.split('#')[0]
			window.location.href = newUrl
		}
	}, [])
	const [isExpanded, setIsExpanded] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const { hash } = location
		setIsActive(hash === `#${id}`)
	}, [location, id])

	const toggleReadMore = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div
			className={` lg:w-[30vh] flex flex-col items-center drop-shadow-lg`}
			id={id}
		>
			<h2 className='text-center font-[700] text-md lg:text-[2.3vh] h-[4.3vh] md:h-[6vh] flex items-center'>
				{company}
			</h2>
			<div className='flex justify-between items-center w-full'>
				<div className='flex gap-[0.3vh]'>
					<Star
						color='#416CF6'
						fill='#416CF6'
						className='w-[2vh] md:w-[2.5vh]'
					/>
					<Star
						color='#416CF6'
						fill='#416CF6'
						className='w-[2vh] md:w-[2.5vh]'
					/>
					<Star
						color='#416CF6'
						fill='#416CF6'
						className='w-[2vh] md:w-[2.5vh]'
					/>
					<Star
						color='#416CF6'
						fill='#416CF6'
						className='w-[2vh] md:w-[2.5vh]'
					/>
					<Star
						color='#416CF6'
						fill='#416CF6'
						className='w-[2vh] md:w-[2.5vh]'
					/>
				</div>
				<img
					src={img}
					alt={company}
					className='w-auto h-[6vh]'
					loading='lazy'
				/>
			</div>
			<div
				className={`bg-[#EDF0F9] rounded-lg p-[1.3vh] mt-[1.3vh] w-64 lg:w-[30vh] relative transition-all ${
					isActive ? 'border-2 border-blue-500' : ''
				}`}
			>
				<p
					className={`text-sm lg:text-[1.5vh] transition-all duration-500 relative  leading-[2.3vh]  ${
						isExpanded ? '' : 'h-[39.5vh] lg:h-[37vh] overflow-hidden'
					} `}
				>
					<i>{text}</i>
					{!isExpanded && (
						<div className='absolute bottom-0 left-0 transition-all right-0 h-[1vh] bg-gradient-to-t from-[#EDF0F9] to-transparent pointer-events-none'></div>
					)}
				</p>

				<button
					onClick={toggleReadMore}
					className='font-[600] text-[#416CF6] text-[1.5vh] italic'
				>
					{isExpanded ? '🠉 Show less ' : '🠋 Read more '}
				</button>
			</div>
			<p className='text-sm lg:text-[2vh] text-center mt-[1.3vh] font-[700]'>
				{name}
			</p>
			<p className='text-sm lg:text-[1.5vh] text-center'>{who}</p>
		</div>
	)
}

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
				scrollContainerRef.current.scrollLeft = 1
			} else if (scrollLeft + clientWidth >= scrollWidth) {
				scrollContainerRef.current.scrollLeft = scrollWidth - clientWidth - 1
			}
		}
	}
	return (
		<section
			className='lg:max-w-[166vh] mx-auto mt-10 lg:mt-12vh pb-[8vh] w-full px-5 lg:px-[3vh]'
			id='reviews'
		>
			<div className='flex items-center justify-center md:gap-6 gap-2'>
				<h2 className='font-[600] text-xl lg:text-[5vh] text-center leading-[105%] text-[#416CF6]'>
					Proven Savings <br className='sm:hidden' />-{' '}
					<i>what Frylow clients say</i>
				</h2>
				<img
					src='/images/mc.webp'
					alt='Master Chef logo'
					className='h-20 md:h-[12vh]  drop-shadow-lg'
					loading='lazy'
				/>
			</div>
			<div
				className='flex mt-8 lg:mt-[8vh] md:justify-center lg:justify-between w-full md:flex-wrap gap-[2vh] overflow-x-scroll md:overflow-hidden'
				ref={scrollContainerRef}
			>
				{canadianReviews.map((review, index) => (
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
