import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import ReviewRow from '../../../components/Frylow/Reviews/ReviewRow'
import {
	reviewsRowFive,
	reviewsRowFour,
	reviewsRowOne,
	reviewsRowThree,
	reviewsRowTwo,
} from '../../../data/reviews-page/USAreviews'
import ReviewsVideos from '../../../components/Frylow/Reviews/ReviewsVideos'

const Reviews = () => {
	return (
		<div className='relative'>
			<HeaderNav link={'/usa/frylow/'} />
			<div className='relative md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh] lg:max-w-[160vh] mx-auto px-[3vh] md:px-0'>
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
				<ReviewRow arr={reviewsRowOne} />
				<ReviewRow arr={reviewsRowTwo} />
				<ReviewRow arr={reviewsRowThree} />
				<ReviewRow arr={reviewsRowFour} />
				<ReviewRow arr={reviewsRowFive} />
			</div>
			<ReviewsVideos link='/usa/frylow/' />
			<LinksFooter img='/images/small_logo.png' />
		</div>
	)
}

export default Reviews
