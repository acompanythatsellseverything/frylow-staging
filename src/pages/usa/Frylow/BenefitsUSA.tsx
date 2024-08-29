import { useLocation } from 'react-router-dom'
import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import { useEffect } from 'react'
import RestaurantsLove from '../../../components/Frylow/Benefits/RestaurantsLove'

import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import ConsumersCare from '../../../components/Frylow/Benefits/ConsumersCare'
import TryFrylow from '../../../components/Frylow/Benefits/TryFrylow'
import Results from '../../../components/Frylow/Landing/Results'
import Experts from '../../../components/Frylow/Landing/Experts'
import ExpertsMobile from '../../../components/Frylow/Landing/ExpertsMobile'

const BenefitsUSA = () => {
	// const location = useLocation()

	// useEffect(() => {
	// 	const currentUrl = window.location.href
	// 	const hashIndex = currentUrl.indexOf('#')
	// 	if (hashIndex !== -1) {
	// 		const newUrl = currentUrl.substring(0, hashIndex)
	// 		window.history.replaceState(null, '', newUrl)
	// 	}
	// }, [location])
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
		<div id='love'>
			<HeaderNav link='/usa/frylow/' />
			<RestaurantsLove />
			<div className=' md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh] rounded-xl '>
				<Results />
				<span id='consumers'></span>
			</div>
			<ConsumersCare />
			<div id='experts'>
				<ExpertsMobile />
				<Experts showButton={false} />
			</div>
			<TryFrylow link='/usa/frylow/' />
			<LinksFooter img='/images/small_logo.png' />
		</div>
	)
}

export default BenefitsUSA
