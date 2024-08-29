const ThankYou = () => {
	return (
		<section className='md:h-screen w-full flex justify-center items-center'>
			<div className='max-w-[160vh] bg-[#EDF0F9] w-full h-screen md:max-h-[80vh] h-full rounded-xl p-[3vh] flex '>
				<div className='text-center flex flex-col w-full justify-around'>
					<h1 className='text-[#416CF6] font-[600] text-5xl md:text-6xl lg:text-[8vh]'>
						Thank you !
					</h1>
					<div className='flex w-full justify-evenly flex-col gap-8  md:flex-row'>
						<img
							src='/images/header_logo.webp'
							className='w-64 md:w-96 lg:w-[39vh] self-center '
							loading='lazy'
						/>
						<img
							src='/images/frylow-logo.webp'
							className='w-52  md:w-72 lg:w-[30vh] self-center '
							loading='lazy'
						/>
					</div>

					<p className='font-[500] md:text-6xl text-3xl lg:text-[7vh] self-center  text-center'>
						A <span className='text-[#416CF6]'>Frylow expert</span> will reach
						out to you soon.
					</p>
				</div>
			</div>
		</section>
	)
}

export default ThankYou
