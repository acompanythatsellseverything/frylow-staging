import GeneralBulletPoints from './GeneralBulletPoints'
import TablesWithoutFrylow from './TablesWithoutFrylow'
import TablesWithFrylow from './TableWithFrylow'
import UsingInfo from './UsingInfo'

const CostSavingTemplate = ({ link }: { link: string }) => {
	return (
		<>
			<div className=' pt-8 md:pt-16 lg:pt-[12vh]'>
				<div className='lg:max-w-[166vh] mx-auto px-4 md:px-16 lg:px-[5vh]'>
					<h2 className='font-[600] text-2xl md:text-[5.3vh] text-center leading-[105%]'>
						Fry-oil Cost Savings Template
					</h2>
					<p className='mt-[0.5vh] text-[#3C5EBA]  md:text-[4vh] text-center font-medium'>
						5-Year forecast for a typical restaurant{' '}
						<br className='sm:hidden' />
						<i className='text-sm md:text-[3.3vh]'>
							(based on Frylow's 5-year warranty)
						</i>
					</p>
					<GeneralBulletPoints />
					<TablesWithoutFrylow />
					<TablesWithFrylow />
					<UsingInfo />
					<div className='w-full lg:p-0 flex justify-center mt-6 md:mt-16 lg:mt-[6vh]'>
						<button
							onClick={() =>
								(location.href = `${link}cost-savings-estimate-form/`)
							}
							className='text-md bg-[#006A54] text-white rounded-xl w-4/5 font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
						>
							Get&nbsp;Frylow&nbsp;SAVINGS&nbsp;Estimate
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CostSavingTemplate
