import Carousel from '../../Frylow/Landing/Carousel'

const CarouselUSA = () => {
	return (
		<section className='xl:max-w-[160vh] w-full mx-auto relative mt-10 lg:mt-[12vh] md:px-8'>
			<h2 className='font-[600] lg:text-[5vh] text-xl text-center leading-[105%] mb-8 lg:mb-[8vh]'>
				Trusted by over 50,000 restaurants across
				<br /> the world in over 150 countries
			</h2>
			<Carousel />
		</section>
	)
}

export default CarouselUSA
