import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ReviewCard: React.FC<any> = ({ company, text, name, who, id, img }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const currentUrl = window.location.href
		if (currentUrl.includes('#')) {
			const newUrl = currentUrl.split('#')[0]
			window.location.href = newUrl
		}
	}, [])

	useEffect(() => {
		const { hash } = location
		setIsActive(hash === `#${id}`)
	}, [location, id])
	const toggleReadMore = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={`lg:w-[50vh] flex flex-col items-center`} id={id}>
			<h2 className='text-center font-[700] text-md lg:text-[3vh] flex items-center h-[4.3vh] md:h-[7vh]'>
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
				className={`bg-[#EDF0F9] rounded-lg p-[1.3vh] md:mt-[1.3vh] w-64 lg:w-[50vh] relative transition-all ${
					isActive ? 'border-2 border-blue-500' : ''
				}`}
			>
				<p
					className={`text-md leading-tight lg:text-[2vh] transition-all duration-500 relative ${
						isExpanded ? '' : 'h-[39.5vh] lg:h-[30.5vh] overflow-y-hidden'
					} `}
				>
					<i>{text}</i>
					{!isExpanded && (
						// absolute bottom-0 left-0 right-0
						<div className='transition-all h-[1vh] bg-gradient-to-t from-[#EDF0F9] to-transparent pointer-events-none'></div>
					)}
				</p>

				<button
					onClick={toggleReadMore}
					className='font-[600] text-[#416CF6] text-[1.5vh] italic'
				>
					{isExpanded ? '↑ Show less ' : '↓ Read more '}
				</button>
			</div>
			<p className='text-sm lg:text-[2.5vh] text-center mt-[1.3vh] font-[700]'>
				{name}
			</p>
			<p className='text-sm lg:text-[1.7vh] text-center mt-[1vh]'>{who}</p>
		</div>
	)
}

export default ReviewCard
