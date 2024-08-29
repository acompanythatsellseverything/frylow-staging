const ExpertsCA = ({ showButton = true }) => {
	return (
		<section className='max-w-[166vh] mx-auto pt-[12vh] w-full px-[3vh] hidden lg:block'>
			<h2 className='font-[600] text-[5vh] text-center leading-[105%]'>
				What the Experts say
			</h2>
			<i className='text-[4.3vh] text-center'>
				<p className='mt-[0.5vh] text-[#3C5EBA]'>Certified by ...</p>
			</i>
			<div className='flex mt-4 lg:mt-[8vh] gap-[3vh]'>
				{/*  */}
				<div className='flex flex-col w-[47%] bg-[#EDF0F9] rounded-lg pt-[1vh] pr-[1vh]'>
					<div className='flex  justify-between'>
						<div className='flex flex-col  w-1/2 items-center'>
							<img
								src='/images/Ferdinand.webp'
								alt='Master Chef Ferdinand Metz'
								className='h-[24vh] w-[20vh] drop-shadow-lg'
								loading='lazy'
							/>
							<p className='font-[700] text-[1.5vh] text-center mt-[1.5vh]'>
								Master Chef - Ferdinand Metz
								<br /> President, CIA, 21 years.
								<br /> James Beard Lifetime Achievement Award
							</p>
						</div>
						<div className='flex flex-col w-[44%] '>
							<h2 className='font-[700] text-[2.3vh] text-center leading-[110%]'>
								Master Chefs’ <br />
								Seal of Excellence
							</h2>
							<p className='text-[1.6vh] mt-[1vh] font-[500]'>
								In 2016, Frylow earned the Master Chefs' Seal of Excellence.{' '}
								<b>The Master Chefs Institute</b> is dedicated to upholding the
								highest standards of culinary excellence and confirmed that
								Frylow met the stringent 120 individual tests and quality
								standards prescribed for this prestigous award.
							</p>
						</div>
					</div>
					<div className='flex items-center justify-between mt-[3vh]'>
						<div className='flex flex-col items-center self-end gap-[1.5vh] mb-[2vh] w-[50%] justify-center'>
							<img
								src='/images/mc.webp'
								alt='Master Chef logo'
								className='h-[14.4vh]'
								loading='lazy'
							/>
							<a
								href='https://frylow.com/wp-content/uploads/2021/07/Frylow-Master-Chefs-Seal-of-Excellence.pdf'
								className='text-[blue] underline text-[1.7vh] text-center'
							>
								Full Report
							</a>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<h2 className='font-[700] text-[2.3vh] text-center '>
								Master Chefs’ Endorsement
							</h2>
							<iframe
								// https://vimeo.com/manage/videos/999137970/09a327b2fa
								src='https://player.vimeo.com/video/999137970?h=09a327b2fa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
								title='Frylow: Review'
								loading='lazy'
								className='rounded-xl border h-[19vh] w-[34vh] drop-shadow-lg mt-[1vh]'
							></iframe>
						</div>
					</div>
				</div>
				{/*  */}
				<div className='flex flex-col w-[55%]'>
					<div className='flex gap-[3vh]'>
						<div className='flex justify-around mt-[1vh]'>
							<div className='flex flex-col w-[37%] '>
								<h2 className='font-[700] text-[2.3vh] text-center h-[5vh] flex justify-center items-center'>
									NSF International
								</h2>
								<p className='text-[1.6vh] font-[500] mt-[1.4vh]'>
									Frylow has been <b>certified 100% food-safe worldwide.</b> NSF
									International has independently tested and confirmed that
									there are zero health and/or safety issues with Frylow
									Deep-Fryer Devices.
								</p>
								<a
									href='https://frylow.com/wp-content/uploads/2021/07/C0079363-169.pdf'
									className='text-[blue] mt-[4vh] underline text-[1.7vh]  text-center'
								>
									Full Report
								</a>
							</div>
							<div className='flex flex-col w-1/2 '>
								<h2 className='font-[700] text-[2.3vh] text-center h-[5vh] leading-[110%]'>
									Japan Industry Standards
									<br /> Ministry of Health
									<span className='text-[red]'>*</span>
								</h2>
								<p className='text-[1.6vh] mt-[1.5vh] font-[500]'>
									The Japanese Industrial Standards Committee (JISC), Japan's
									national standardization body, plays a central role in
									developing standards in Japan covering a wide range of
									products and technologies from robots to pictograms.
								</p>
								<p className='text-[1.6vh] mt-[2vh] font-[500] text-[red]'>
									<span className='font-[700]'>* Frylow</span> was created by a
									Japanese inventor and is currently manufactured in Japan.
								</p>
								<a
									href='https://www.jisc.go.jp/eng/policy/Japan_and_Industrial_Standards_2017.pdf'
									className='text-[blue] mt-[4vh] underline text-[1.7vh]  text-center'
								>
									Full Report
								</a>
							</div>
						</div>
					</div>
					<div className='flex flex-col w-[53%]  mx-auto mt-[1vh] h-full  justify-center'>
						<h2 className='font-[700] text-[2.3vh] text-center h-[7vh] flex justify-center items-center'>
							California Certificate of Analysis
						</h2>
						<p className='text-[1.6vh] font-[500] text-center'>
							Determination of Acrylamide, Cooking Time, Absorption Capacity of
							Oils and Calories in Fried Foods.
						</p>
						<a
							href='https://frylow.com/wp-content/uploads/2021/07/california-lab-tests-frylow.pdf'
							className='text-[blue] mt-[3vh] underline text-[1.7vh] text-center'
						>
							Full Report
						</a>
					</div>
				</div>
			</div>
			{/* </div> */}
			{showButton && (
				<div className='w-full flex  mt-12vh'>
					<button
						onClick={() =>
							(location.href = '/ca/frylow/cost-savings-estimate-form/')
						}
						type='submit'
						className='bg-[#F64A41] text-white rounded-xl max-w-[80vh] font-[700] py-2 text-[3vh] w-full mx-auto  border border-[#F64A41] hover:text-[#F64A41] hover:bg-white transition-all'
					>
						Get Frylow SAVINGS Estimate
					</button>
				</div>
			)}
		</section>
	)
}

export default ExpertsCA
