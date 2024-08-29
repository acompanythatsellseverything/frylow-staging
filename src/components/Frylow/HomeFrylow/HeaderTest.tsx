const HeaderTest = ({ img }: { img: string }) => {
	return (
		<header
			className='bg-cover bg-center py-2 px-4 lg:h-[10vh] h-fit'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='max-w-[140vh]  mx-auto flex flex-col items-center justify-between h-full px-[2vh] lg:px-[3vh]'>
				<div className='flex w-full h-full items-center justify-between gap-3'>
					<img
						src={img}
						className='lg:w-[8vh] lg:h-[8vh] w-16 md:w-20  border-solid border border-white border-2 rounded-lg'
						loading='lazy'
					/>
					<h2 className='text-white font-[600] text-xl lg:text-[5vh] text-center leading-[130%]'>
						<span
							style={{
								background:
									'linear-gradient(90deg, #FBED2D 0%, #E0B119 47.37%)',
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
			</div>
		</header>
	)
}

export default HeaderTest
