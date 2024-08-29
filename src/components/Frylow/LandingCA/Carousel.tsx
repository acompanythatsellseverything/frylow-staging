import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//12 - carlos o br(25),
// 18 - browns(24)
const images = [
	{ src: '/images/brands/image 25.webp' },
	{ src: '/images/brands/image 13.webp' },
	{ src: '/images/brands/image 14.webp' },
	// { src: '/images/brands/image 16.webp' },
	{ src: '/images/brands/image 4.webp' },
	{ src: '/images/brands/image 5.webp' },
	{ src: '/images/brands/image 6.webp' },
	{ src: '/images/brands/image 7.webp' },
	{ src: '/images/brands/image 8.webp' },
	{ src: '/images/brands/image 9.webp' },
	{ src: '/images/brands/image 10.webp' },
	{ src: '/images/brands/image 11.webp' },
	{ src: '/images/brands/image 17.webp' },
	{ src: '/images/brands/image 24.webp' },
	{ src: '/images/brands/image 19.webp' },
	{ src: '/images/brands/image 20.webp' },
	{ src: '/images/brands/image 21.webp' },
	{ src: '/images/brands/image 22.webp' },
	{ src: '/images/brands/image 23.webp' },
]

function NextArrow(props: any) {
	const { className, style, onClick } = props
	return (
		<div
			className={`${className} bg-[#EDF0F9] rounded-full p-[20px] lg:p-[3vh] hover:bg-[#EDF0F9] shadow-md`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onClick={onClick}
		/>
	)
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props
	return (
		<div
			className={`${className} bg-[#EDF0F9] rounded-full p-[20px] lg:p-[3vh] hover:bg-[#EDF0F9] shadow-md`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			onClick={onClick}
		/>
	)
}

function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots: any) => (
			<div>
				<ul style={{ margin: '0px' }} className='slick-dots'>
					{dots}
				</ul>
			</div>
		),
		customPaging: function () {
			return <div className='dot'></div>
		},
		swipeToSlide: true,
		touchThreshold: 15,
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					variableWidth: true,
					waitForAnimate: false,
					speed: 100,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					variableWidth: true,
					waitForAnimate: false,
					speed: 100,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
					waitForAnimate: false,
					speed: 100,
				},
			},
		],
	}

	return (
		<div className='mx-[20px]'>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className='flex flex-col lg:w-[12vh] w-[300px]'
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img
							src={image.src}
							alt={`Image ${index + 1}`}
							className='w-22 h-12 md:w-36 md:h-20  lg:w-[36vh] lg:h-[20vh]  mx-auto'
							loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel
