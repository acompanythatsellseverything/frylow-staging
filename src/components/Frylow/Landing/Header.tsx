import { Link } from 'react-router-dom'

const Header = ({ link }: { link: string }) => {
	return (
		<header
			className='bg-cover bg-center h-[80px] lg:h-[13vh]'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='max-w-[150vh]  mx-auto flex items-center justify-between h-full px-[2vh] lg:px-[3vh]'>
				<Link to={link}>
					<img
						src='/images/header_logo.webp'
						className='lg:w-[27vh] lg:h-[10vh] w-[130px] h-[45px]'
						loading='lazy'
					/>
				</Link>

				<h2 className='text-white font-[700] text-sm lg:text-[4vh] text-center leading-[130%]'>
					<span className='text-[16px] lg:text-[5vh] font-[600]'>Frylow</span> -
					Clean and Simple
					<br />
					<span
						style={{
							background: 'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
							WebkitBackgroundClip: 'text',
							color: 'transparent',
						}}
					>
						Fry-Oil Savings
					</span>{' '}
					for Restaurants
				</h2>
			</div>
			<img
				src='https://segment.prod.bidr.io/associate-segment?buzz_key=5x5dsp&segment_key=5x5dsp-1940&value='
				height='0'
				width='0'
			/>
		</header>
	)
}

export default Header
