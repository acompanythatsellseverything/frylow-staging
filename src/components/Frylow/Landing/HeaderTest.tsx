import { Link } from 'react-router-dom'

const HeaderTest = ({ link }: { link: string }) => {
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
				<h2 className='text-white font-[700] text-xl lg:text-[5.3vh] text-center leading-[130%]'>
					<span
						style={{
							background: 'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
							WebkitBackgroundClip: 'text',
							color: 'transparent',
						}}
					>
						Save 50%
						<br className='md:hidden' />
					</span>{' '}
					on your Fry-Oil costs
				</h2>
			</div>
		</header>
	)
}

export default HeaderTest
