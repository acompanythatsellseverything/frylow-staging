const TryFrylow = ({ link }: { link: string }) => {
	return (
		<div className=' md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh]'>
			<div className='bg-[#EDF0F9] py-[4vh]  px-[3vh]'>
				<p className='text-blue-600 font-bold lg:text-[4.5vh] leading-[120%] text-center text-md'>
					Try Frylow at NO Cost.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO Obligation.
					<br />
					Experience the proven savings yourself.
				</p>
				<div className='w-full lg:p-0 flex justify-center mt-4'>
					<button
						onClick={() =>
							(window.location.href = `${link}cost-savings-estimate-form/`)
						}
						className='text-md bg-[#006A54] text-white rounded-xl w-full md:w-1/3 font-[700] py-[1vh] mt-[0.5vh] md:mt-[2vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
					>
						Try&nbsp;Frylow&nbsp;in&nbsp;Your&nbsp;Restaurant!
					</button>
				</div>
			</div>
		</div>
	)
}

export default TryFrylow
