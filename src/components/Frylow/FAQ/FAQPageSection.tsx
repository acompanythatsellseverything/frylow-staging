import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	Box,
} from '@chakra-ui/react'


const FAQPageSection = () => {


	const accordionItems = [
		{
			question: 'What is Frylow?',
			answer: 'Frylow, a fry-oil conditioner, is a patented Japanese photo catalytic ceramic device infused with 7 NSF approved precious and semi-precious metals.',
		},
		{
			question: 'How does Frylow work?',
			answer: 'Frylow alters the molecular structure of frying oil, improving heat transfer and reducing oil consumption.',
		},
		{
			question: 'How much fry-oil does Frylow SAVE?',
			answer: 'On average, Frylow can save up to 50% or more of fry-oil usage.',
		},
		{
			question: 'What is Frylow’s impact on fried food?',
			answer: 'Frylow helps produce crispier, less greasy fried food with a longer shelf life. Moist on the inside, crispy on the outside. The deep-frying holy grail.',
		},
		{
			question: 'What is Frylow’s impact on cooking times?',
			answer: 'Frylow can reduce cooking times by improving heat transfer efficiency of the fry-oil into the food product.',
		},
		{
			question: 'At what temperature should fry-oil be with Frylow?',
			answer: 'The recommended frying temperature is 335°F to 345 °F (168°C to 175°C) with Frylow.',
		},
		{
			question: 'What is involved with maintaining Frylow?',
			answer: 'Maintenance involves regular cleaning with hot water. Rinse daily in the dish sink. Boil in water for 10 minutes with every oil change of the fryer.',
		},
		{
			question: 'Does Frylow provide a warranty?',
			answer: 'Yes, Frylow comes with a 5-year warranty covering defects in material and workmanship.',
		},
		{
			question: 'Are free trials offered?',
			answer: 'Yes, Frylow offers a free trial for potential qualified customers to experience the benefits firsthand.',
		},
	]
	return (
		<section
			className="lg:max-w-[166vh] mx-auto mt-2 md:mt-14 lg:mt-[4vh] w-full px-[20px] lg:px-[3vh] mb-24 flex flex-col justify-between"

		>
			<div className="flex mt-4 lg:mt-[4vh] gap-[10px] lg:gap-[4vh] justify-around flex-col md:flex-row flex-1 ">
				<div
					className="text-[14px] lg:w-[73vh] lg:text-[2.1vh] space-y-4 mb-8 lg:mb-0 flex-1 flex flex-col justify-between"
					style={{ textAlign: 'justify' }}
				>
					<h2 className="font-[600] text-[4vh] lg:text-[5vh] leading-[3rem] lg:leading-[2.5rem] text-left">Frequently asked questions</h2>
					<p className="text-lg font-[600]">Do you have questions? We have answers <br /><i>(well, most of the time)</i>!</p>
					<img
						width={580}
						height={460}
						alt={'Frylow inside fryer'}
						src={'/images/meat-with-french-fries-on-the-plate.webp'}
						className="w-full object-cover rounded-3xl"
						loading="lazy"
					/>
				</div>

				{/* Accordion Here */}
				<div className="lg:w-[73vh] flex-1 flex flex-col">
					<Accordion allowToggle>
						{accordionItems.map((item, index) => (
							<AccordionItem
								key={index}
								sx={{
									mb: 5, // Space between items
									border: 'none', // Remove border
									borderRadius: '10px', // Rounded corners
									bg: '#EDF0F9', // Background color
									// p: '6px'
								}}
							>
								<AccordionButton
									sx={{
										p: 4,
										borderRadius: '16px', // Ensure the button respects rounded corners
										_expanded: { bg: '#DCE1EB' }, // Change bg on expand if needed
									}}
								>
									<Box flex="1" textAlign="left">
										{item.question}
									</Box>
									{/*<AccordionIcon />*/}
								{/*use images/chvron-down-full.svg */}
								<img
									src="/images/chvron-down-full.svg"
									alt="chevron down"
									className="w-4 h-4" />
								</AccordionButton>
								<AccordionPanel pb={4}>
									{item.answer}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	)


}

export default FAQPageSection
