const WhatIsVito = () => {
	return (
		<section className='lg:max-w-[166vh] mx-auto mt-28 md:mt-16 lg:mt-[15vh] w-full px-[20px] lg:px-[3vh]'>
			<div className='flex flex-col w-fit mx-auto'>
				<h2 className='font-[600] text-xl lg:text-[5vh] text-center '>
					What is Vito?
				</h2>
				<img
					src={'/images/lines.webp'}
					className='w-28 lg:w-[14vh] self-end  lg:mt-[1vh]'
					loading='lazy'
				/>
			</div>
			<p className='text-[#0D2A84] font-bold lg:text-[3.5vh] leading-[120%] text-center text-md mt-8 md:mt-12 lg:mt-[8vh]'>
				A fry-oil filter game changer
			</p>
			<img
				src='/images/Vito/home/changer-test.png'
				loading='lazy'
				className='mx-auto lg:mt-[4vh] w-[80%]'
			/>
			<div className=' mt-4 lg:mt-[8vh] lg:gap-[4vh]'>
				<p className='font-bold'>The VITO Brand</p>
				<p
					className='text-[14px] lg:text-[2.1vh]'
					style={{ textAlign: 'justify' }}
				>
					With over 22 years of expertise in manufacturing and marketing
					filtration systems, VITO Filters have become the industry standard in
					professional kitchens and bakeries. Founded in 2001 by Andreas Schmidt
					under the brand name SYS Systemfiltration GmbH, our company has since
					evolved into a thriving enterprise with 50 dedicated employees and
					established subsidiaries in Hürth (Germany), Chicago (USA), and Santa
					Lucia Di Piave (Italy). In 2014, we transitioned to VITO AG, a German
					corporation.
					<br /> Today, VITO is a recognized name in 150 countries, with a
					strong customer base of over 50,000, all affirming our commitment to
					excellence. Our continued growth and global reach demonstrate that we
					are steadfastly on the path to success.
				</p>
				<br />
				<p className='font-bold'>100% Made in Germany.</p>
				<p
					className='text-[14px] lg:text-[2.1vh]'
					style={{ textAlign: 'justify' }}
				>
					All VITO filter systems are meticulously manufactured at our
					state-of-the-art headquarters in Tuttlingen, Germany. Our dedicated
					team of quality specialists rigorously oversees every stage of the
					production process, ensuring excellence from material acquisition
					through assembly, testing, packaging, and shipping. Rest assured, only
					the highest quality products pass through our facilities. The enduring
					durability of VITO is a testament to its daily use in the most
					demanding operational environments. We strive to deliver unmatched
					performance and value to our customers.
				</p>
			</div>

			<div className='w-full flex mt-10 lg:mt-[8vh] justify-center'>
				<button
					type='submit'
					onClick={() =>
						(location.href = '/usa/frylow/cost-savings-estimate-form/')
					}
					className='text-md mx-6 lg:mx-0  bg-[#F64A41] text-white rounded-xl max-w-[80vh] font-[700] py-2 lg:text-[3vh] w-full mx-auto border border-[#F64A41] hover:text-[#F64A41] hover:bg-white transition-all'
				>
					Get VITO SAVINGS Estimate
				</button>
			</div>
		</section>
	)
}

export default WhatIsVito
