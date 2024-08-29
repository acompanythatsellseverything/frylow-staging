const Footer = ({ country }: { country: string }) => {
	return (
		<footer
			className='bg-cover bg-center  lg:mt-12vh'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='flex flex-col w-full items-center justify-center h-full py-6 lg:py-[3vh]'>
				<h6 className='text-white text-center text-md font-[700] lg:text-[3vh]'>
					Try Frylow at NO Cost. &nbsp;&nbsp;&nbsp;&nbsp;NO Obligation. <br />
					Experience the proven Savings yourself.
				</h6>
				<div className='w-full px-16 flex'>
					<button
						onClick={() =>
							(location.href = `/${country}/frylow/cost-savings-estimate-form/`)
						}
						type='submit'
						className=' bg-[#006A54] text-white rounded-xl lg:max-w-[80vh] font-[600] py-2 lg:text-[3vh] w-full mx-auto border border-2 border-[white] mt-[2vh] hover:border-[#006A54] hover:bg-[#EDF0F9] hover:text-[#006A54] transition-all'
					>
						Try Frylow in Your Restaurant!
					</button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
