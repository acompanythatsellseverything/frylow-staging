const WhatIsFrylow = ({ img }: { img: string }) => {
	return (
		<div className=' md:px-[4vh]'>
			<div className='flex flex-col w-fit mx-auto'>
				<h2 className='font-[600] text-xl lg:text-[5vh] text-center '>
					What is Frylow?
				</h2>
				<img
					src={'/images/lines.webp'}
					className='w-28 lg:w-[21vh] self-end  lg:mt-[1vh]'
					loading='lazy'
				/>
			</div>
			<div className='flex mt-4 lg:mt-[8vh] gap-[10px] lg:gap-[2vh] justify-between flex-col md:flex-row'>
				<p
					className='text-[14px] lg:w-[85vh] lg:text-[2.1vh]'
					style={{ textAlign: 'justify' }}
				>
					<b>
						Frylow is a patented Japanese photo catalytic ceramic device infused
						with 7 NSF approved precious and semi-precious metals.{' '}
					</b>
					<br />
					<br />
					<b>Fry-oil use induces molecule bonding (“clumping”)</b>, resulting in
					oil thickening, oxidation, and soggier fried food.
					<br />
					<br /> <b>Frylow’s photo catalytic technology</b> works at the
					molecular level that slows down the fry-oil’s oxidation (
					<i>loss of electrons</i>) process by recharging it with new electrons
					and by increasing the oil’s thermal conductivity. This lowered oil
					viscosity (<i>thinner oil</i>) is now thermally efficient and can
					transfer more heat from the oil to the food.{' '}
					<span className='tracking-tight'>
						This decreases oil absorption that produces lighter, crispier, and
						tastier fried product.
					</span>
					<br />
					<br />
					<b>Frylow’s ingenious design of high-performance ceramic tiles </b>
					uses UV light to infuse fry- oil with these new electrons (without
					using electricity or chemical additives) that are negatively charged
					so the oil and food will tend to repel each other, thereby reducing
					oil penetration of the food.
				</p>
				<div className='flex flex-col md:flex-col justify-between gap-[3vh]'>
					<img
						src={img}
						className='w-full lg:w-[60vh] lg:h-[38vh] drop-shadow-custom '
						loading='lazy'
					/>
					<p className='lg:w-[60vh] md:ml-[0.5vh] text-[14px] lg:text-[2.1vh] md:text-justify md:tracking-0 tracking-tight'>
						Place the easy-to-use Frylow in any commercial fryer (below the fry
						baskets) and leave it there. It requires no electricity and has no
						moving parts.{' '}
						<span>
							<b>
								Frylow works by just resting in the fry-oil, with no recurring
								costs.
							</b>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default WhatIsFrylow
