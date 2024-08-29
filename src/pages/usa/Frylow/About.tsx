import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import FrylowGeneralInfo from '../../../components/Frylow/About/FrylowGeneralInfo'
import CostSavingTemplate from '../../../components/Frylow/About/CostSavingTemplate'
import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import FrylowTrial from '../../../components/Frylow/About/FrylowTrial'
import TrialExpectation from '../../../components/Frylow/About/TrialExpectation'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
	const location = useLocation()

	useEffect(() => {
		// Проверяем наличие хэша в URL
		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1))
			if (element) {
				// Прокручиваем к элементу
				element.scrollIntoView({ behavior: 'smooth' })
			}

			// Очищаем хэш в URL
			const currentUrl = window.location.href
			const hashIndex = currentUrl.indexOf('#')
			if (hashIndex !== -1) {
				const newUrl = currentUrl.substring(0, hashIndex)
				window.history.replaceState(null, '', newUrl)
			}
		}
	}, [location])
	return (
		<div id='howFrylowWorks'>
			{/* <div className='shadow-lg'> */}
			<HeaderNav link='/usa/frylow/' />
			{/* </div> */}
			<div className='relative'>
				<div className='pb-0 p-4 md:px-16 lg:px-[5vh]'>
					<FrylowGeneralInfo img='/images/frylow_america.webp' />
				</div>
			</div>
			<div id='template'>
				<CostSavingTemplate link='/usa/frylow/' />
			</div>
			<div
				className=' md:mt-14 lg:mt-[2vh] pt-4 mt-4 md:pt-16 lg:pt-[10vh]'
				id='trial'
			>
				<div className='bg-[#EDF0F9]  px-4 md:px-16 lg:px-[5vh] lg:py-[5vh] py-8'>
					<div className='lg:max-w-[166vh] mx-auto'>
						<FrylowTrial />
						<TrialExpectation />
						<div className='w-full lg:p-0 flex justify-center mt-8 md:mt-16 lg:mt-[8vh]'>
							<button
								onClick={() =>
									(window.location.href =
										'/usa/frylow/cost-savings-estimate-form/')
								}
								className='text-md bg-[#006A54] text-white rounded-xl w-4/5 md:w-3/6 font-[700] py-[1vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
							>
								Get&nbsp;Frylow&nbsp;SAVINGS&nbsp;Estimate
							</button>
						</div>
						<hr className='border border-blue-500 mt-8 md:mt-[8vh]' />
						<p className='text-blue-600 font-bold lg:text-[4.5vh] leading-[120%] text-center text-md mt-6'>
							Try Frylow at NO Cost.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO Obligation.
							<br />
							Experience the proven savings yourself.
						</p>
					</div>
				</div>
			</div>

			<LinksFooter img='/images/small_logo.png' />
		</div>
	)
}

export default About
