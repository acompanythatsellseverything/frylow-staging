import Carousel from '../../../components/Frylow/LandingCA/Carousel'
import Footer from '../../../components/Frylow/Landing/Footer'
import WhatIsFrylow from '../../../components/Frylow/LandingCA/WhatIsFrylow'
import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import IntroImages from '../../../components/Frylow/HomeFrylow/IntroImages'
import Certifications from '../../../components/Frylow/HomeFrylow/Certifications'
import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import ExpertsCA from '../../../components/Frylow/LandingCA/ExpertsCA'
import ExpertsMobileCA from '../../../components/Frylow/LandingCA/ExpertsMobileCA'
import ResultsCA from '../../../components/Frylow/LandingCA/ResultsCA'
import Reviews from '../../../components/Frylow/LandingCA/Reviews'
import HeaderTest from '../../../components/Frylow/HomeFrylow/HeaderTest'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

const HomeCA = () => {
	return (
		<CountryContext.Provider value='ca'>
			<div className='min-h-screen flex flex-col'>
				<HeaderNav link='/ca/frylow/' />
				<HeaderTest img='/images/small_logoCA.png' />
				<IntroImages link='/ca/frylow/' />
				<div className='lg:max-w-[160vh] w-full  mx-auto relative mt-10 lg:mt-12vh'>
					<h2 className='font-[600] lg:text-[5vh] text-xl text-center leading-[105%] mb-8 lg:mb-[8vh]'>
						Trusted by Thousands of
						<br /> Restaurants across North America
					</h2>
					<Carousel />
				</div>
				<WhatIsFrylow />
				<Reviews />
				<ResultsCA />
				<ExpertsCA />
				<ExpertsMobileCA />
				<Footer country='ca' />
				<Certifications />
				<LinksFooter img='/images/small_logoCA.png' />
			</div>
		</CountryContext.Provider>
	)
}

export default HomeCA
