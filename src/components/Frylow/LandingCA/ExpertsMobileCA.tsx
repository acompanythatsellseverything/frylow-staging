const ExpertsMobileCA = () => {
	return (
		<section className='px-6 py-10 lg:hidden'>
			<div className='flex flex-col items-center'>
				<h6 className='font-bold text-xl text-center'>What the Experts say</h6>
				<i className='text-lg text-blue-700'>Certified by ...</i>
			</div>
			<div className='bg-[#EDF0F9] rounded-xl p-4 mt-4'>
				<div className=' flex gap-3 mt-4'>
					{/* First part start */}
					<div className='flex flex-col w-[56%]'>
						{/* Chef */}
						<div className='flex flex-col items-center'>
							<img
								src='/images/Ferdinand.webp'
								alt='Master Chef Ferdinand Metz'
								className='h-36 w-30 drop-shadow-lg rounded-xl'
								loading='lazy'
							/>
							<p className='font-[700] text-sm text-center mt-[1.5vh] tracking-[-0.09vh]'>
								Master Chef -<br /> Ferdinand Metz
								<br /> President, CIA, 21 years.
								<br /> James Beard Lifetime
								<br /> Achievement Award
							</p>
						</div>
						{/* Chef */}
						<div className='flex flex-col items-center mt-4'>
							<img
								src='/images/mc.webp'
								alt='Master Chef Ferdinand Metz'
								className='h-20 w-20 drop-shadow-lg rounded-xl'
								loading='lazy'
							/>
							<a
								href='https://frylow.com/wp-content/uploads/2021/07/Frylow-Master-Chefs-Seal-of-Excellence.pdf'
								className='text-[blue] underline text-sm text-center mt-3'
							>
								Full Report
							</a>
						</div>
					</div>
					{/* End of first part */}
					{/* Start of second section */}
					<div className='flex flex-col w-1/2'>
						<div>
							<p className='leading-[100%] font-bold text-center text-md'>
								Master Chefs’
								<br />
								Seal of Excellence
							</p>
							<p className='text-sm mt-4 font-medium'>
								In 2016, Frylow earned the Master Chefs' Seal of Excellence.{' '}
								<b>The Master Chefs Institute</b> is dedicated to upholding the
								highest standards of culinary excellence and confirmed that
								Frylow met the stringent 120 individual tests and quality
								standards prescribed for this prestigous award.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center mt-6'>
					<p className=' font-bold text-center text-md'>
						Master Chefs’ Endorsement
					</p>
					<iframe
						src='https://player.vimeo.com/video/964536793?h=a76622a8ab&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
						allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
						title="Frylow: Momo's Restaurant"
						loading='lazy'
						className='rounded-xl border w-80 h-44 drop-shadow-lg mt-2'
					></iframe>
				</div>
			</div>

			<div className='flex mt-10 flex-col items-center gap-6'>
				<div className='flex flex-col '>
					<p className='font-bold text-center text-mdflex justify-center items-center'>
						NSF International
					</p>
					<p className='text-sm mt-4 font-medium text-start'>
						Frylow has been <b>certified 100% food-safe worldwide.</b> NSF
						International has independently tested and confirmed that there are
						zero health and/or safety issues with Frylow Deep-Fryer Devices.
					</p>
					<a
						href='https://frylow.com/wp-content/uploads/2021/07/C0079363-169.pdf'
						className='text-[blue] underline text-sm text-center mt-3 self-start'
					>
						Full Report
					</a>
				</div>
				<div className='flex flex-col'>
					<p className='font-bold text-center text-md'>
						Japan Industry Standards
						<br /> Ministry of Health{' '}
						<span className='font-bold text-red-500'>*</span>
					</p>
					<p className='text-sm mt-4 font-medium text-start'>
						The Japanese Industrial Standards Committee (JISC),{' '}
						<b>Japan's national standardization body</b>, plays a central role
						in developing standards in Japan covering a wide range of products
						and technologies from robots to pictograms.
					</p>
					<p className='text-sm mt-4 font-medium text-start text-red-500'>
						<b>* Frylow</b> was created by a Japanese inventor and is currently
						manufactured in Japan.
					</p>
					<a
						href='https://www.jisc.go.jp/eng/policy/Japan_and_Industrial_Standards_2017.pdf'
						className='text-[blue] underline text-sm text-center mt-3 self-start'
					>
						Full Report
					</a>
				</div>
			</div>
			<div className='flex flex-col mt-6'>
				<p className='font-bold text-center text-md flex justify-center items-center'>
					California Certificate
					<br /> Of Analysis
				</p>
				<p className='text-sm mt-4 font-medium mx-auto'>
					Determination of Acrylamide, Cooking Time, Absorption Capacity of Oils
					and Calories in
					<br className='md:hidden' /> Fried Foods.
				</p>
				<a
					href='https://frylow.com/wp-content/uploads/2021/07/california-lab-tests-frylow.pdf'
					className='text-[blue] underline text-sm text-center mt-3 self-start'
				>
					Full Report
				</a>
			</div>
		</section>
	)
}

export default ExpertsMobileCA
