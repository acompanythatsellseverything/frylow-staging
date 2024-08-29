import { useLocation } from 'react-router-dom'
import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import { useEffect } from 'react'
import RestaurantsLove from '../../../components/Frylow/Benefits/RestaurantsLove'
import ResultsCA from '../../../components/Frylow/LandingCA/ResultsCA'
import ExpertsCA from '../../../components/Frylow/LandingCA/ExpertsCA'
import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import ConsumersCare from '../../../components/Frylow/Benefits/ConsumersCare'
import TryFrylow from '../../../components/Frylow/Benefits/TryFrylow'
import ExpertsMobileCA from '../../../components/Frylow/LandingCA/ExpertsMobileCA'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

const BenefitsCA = () => {
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
		<CountryContext.Provider value='ca'>
			<div id='love'>
				<HeaderNav link='/ca/frylow/' />
				<RestaurantsLove />
				<div className=' md:mt-14 lg:mt-[2vh] pt-8 md:pt-16 lg:pt-[10vh] rounded-xl '>
					<ResultsCA />
					<span id='consumers'></span>
				</div>
				<ConsumersCare />
				<div id='experts'>
					<ExpertsMobileCA />
					<ExpertsCA showButton={false} />
				</div>
				<TryFrylow link='/ca/frylow/' />
				<LinksFooter img='/images/small_logoCA.png' />
			</div>
		</CountryContext.Provider>
	)
}

export default BenefitsCA
