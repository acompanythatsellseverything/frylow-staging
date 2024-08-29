const Header = () => {
	return (
		<header
			className='bg-cover bg-center p-4 h-fit xl:h-[18vh]'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='max-w-[165vh]  mx-auto flex flex-col items-center justify-between h-full px-[2vh] lg:px-[3vh]'>
				<div className='flex w-full h-full items-center justify-between gap-3'>
					<div className='flex gap-5 items-center font-semibold'>
						<img
							src={'/images/Vito/home/vito-logo.png'}
							className='lg:w-[7.5vh] lg:h-[12vh] w-[80px]'
							loading='lazy'
						/>
						<p className='text-white lg:text-[2.5vh]'>
							The world&apos;s leading
							<br /> fry-oil filter
						</p>
					</div>

					<h2 className='text-white font-[600] text-sm lg:text-[6vh] text-center leading-[85%] font-bold'>
						<span
							style={{
								background:
									'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
							}}
						>
							Save 50%
						</span>{' '}
						<span className='text-[16px] lg:text-[5vh]'>
							on your Fry-Oil costs
						</span>
						<br />
						<span
							style={{
								background:
									'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
							}}
							className='lg:text-[4vh]'
						>
							+ Optimize
						</span>{' '}
						<span className='text-[16px] lg:text-[3.5vh]'>Food Quality</span>
					</h2>
				</div>
			</div>
		</header>
	)
}

export default Header
