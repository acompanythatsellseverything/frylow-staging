const IntroAction = () => {
	return (
		<div className='lg:mt-[17vh] relative max-w-[150vh] mx-auto'>
			<img
				className='absolute lg:-top-[16vh] lg:h-[40vh]'
				src='/images/Vito/home/vito-girl.png'
			/>
			<p className='text-[#0D2A84] font-bold lg:text-[5vh] leading-[120%] text-center text-md'>
				Amazing Food Quality. Always.
			</p>
			<div className='w-full md:w-1/2 mx-auto mt-[8vh]'>
				<button
					onClick={() =>
						(location.href = `/usa/frylow/cost-savings-estimate-form/`)
					}
					className='text-md bg-[#006A54] text-white rounded-xl w-full font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
				>
					Save Fry-Oil.&nbsp;Improve Quality.&nbsp;Now.
				</button>
			</div>
		</div>
	)
}

export default IntroAction
