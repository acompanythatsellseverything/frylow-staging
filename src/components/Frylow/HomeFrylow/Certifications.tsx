import { firstCol, secondCol } from '../../../data/certifications'

const Certifications = () => {
	return (
		<section className='max-w-[140vh] mx-auto mt-10 md:mt-12vh w-full px-[3vh] mb-[4.3vh] lg:mb-[12vh]'>
			<h2 className='font-[600] text-xl lg:text-[5vh] text-center '>
				Certifications
			</h2>
			<div className='flex mt-4 lg:mt-[8vh] md:gap-[10px] lg:gap-[3vh] justify-between flex-col md:flex-row'>
				<ul className='list-disc list-outside md:w-2/5 font-medium text-sm md:text-lg lg:text-[2vh] custom-ul'>
					{firstCol.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
				<ul className='list-disc list-outside md:w-1/2 font-medium text-sm md:text-lg lg:text-[2vh]'>
					{secondCol.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Certifications
