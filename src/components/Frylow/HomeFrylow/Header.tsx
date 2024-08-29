const Header = ({ img }: { img: string }) => {
	return (
		<header
			className='bg-cover bg-center p-4 lg:h-[10vh] h-fit'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='max-w-[140vh]  mx-auto flex flex-col items-center justify-between h-full px-[2vh] lg:px-[3vh]'>
				<div className='flex w-full h-full items-center justify-between gap-3'>
					<img
						src={img}
						className='lg:w-[8vh] lg:h-[8vh] w-[80px] border-solid border border-white border-2 rounded-lg'
						loading='lazy'
					/>
					<h2 className='text-white font-[600] text-sm lg:text-[3vh] text-center leading-[130%]'>
						<span className='text-[16px] lg:text-[3.5vh] font-[700]'>
							Frylow
						</span>{' '}
						- Clean and Simple{' '}
						<span
							style={{
								background:
									'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
							}}
						>
							Fry-Oil Savings
						</span>{' '}
						for Restaurants
					</h2>
				</div>
			</div>
		</header>
	)
}

export default Header
