import BulletPoints from './BulletPoints'

const RestaurantsLove = () => {
	return (
		<div className=' md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh] lg:max-w-[166vh] mx-auto px-[3vh] md:px-0'>
			<h2 className='font-[600] text-xl lg:text-[5vh] text-center '>
				Why Restaurants Love Frylow
			</h2>
			<div className='flex w-full lg:mt-[8vh] mt-4 justify-between flex-col lg:flex-row'>
				<BulletPoints />
				<div className='lg:w-1/2	 flex flex-col mt-4 md:mt-0'>
					<div className='flex md:gap-[2vh]'>
						<img
							src='/images/benefits/before-one.png'
							className='rounded-lg w-1/2'
						/>
						<img
							src='/images/benefits/after-one.png'
							className='rounded-lg w-1/2'
						/>
					</div>
					<p className='text-blue-700 font-bold text-center font-semibold text-[2vh] md:text-[2.3vh] leading-[85%] mt-1 mb-2 md:mb-[1.5vh]'>
						… in the <i className='font-bold'>same</i> oil !
					</p>
					<div className='flex  md:gap-[2vh] justify-between'>
						<img
							src='/images/benefits/before-two.png'
							className='rounded-lg w-1/2'
						/>
						<img
							src='/images/benefits/after-two.png'
							className='rounded-lg w-1/2'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RestaurantsLove
