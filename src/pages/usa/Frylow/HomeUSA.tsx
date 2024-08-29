import Carousel from '../../../components/Frylow/Landing/Carousel'
import Experts from '../../../components/Frylow/Landing/Experts'
import ExpertsMobile from '../../../components/Frylow/Landing/ExpertsMobile'
import Footer from '../../../components/Frylow/Landing/Footer'
import Results from '../../../components/Frylow/Landing/Results'
import Reviews from '../../../components/Frylow/Landing/Reviews'
import WhatIsFrylow from '../../../components/Frylow/Landing/WhatIsFrylow'
import HeaderNav from '../../../components/Frylow/HomeFrylow/HeaderNav'
import IntroImages from '../../../components/Frylow/HomeFrylow/IntroImages'
import Certifications from '../../../components/Frylow/HomeFrylow/Certifications'
import LinksFooter from '../../../components/Frylow/HomeFrylow/LinksFooter'
import HeaderTest from '../../../components/Frylow/HomeFrylow/HeaderTest'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

const HomeUSA = () => {
	return (
		<CountryContext.Provider value='usa'>
			<div className='min-h-screen flex flex-col'>
				<HeaderNav link='/usa/frylow/' />
				<HeaderTest img='/images/small_logo.png' />
				<IntroImages link='/usa/frylow/' />
				<div className='lg:max-w-[160vh] w-full  mx-auto relative mt-10 lg:mt-12vh'>
					<h2 className='font-[600] lg:text-[5vh] text-xl text-center leading-[105%] mb-8 lg:mb-[8vh]'>
						Trusted by Thousands of
						<br /> Restaurants across North America
					</h2>
					<Carousel />
				</div>
				<WhatIsFrylow />
				<Reviews />
				<Results />
				<Experts />
				<ExpertsMobile />
				<Footer country='usa' />
				<Certifications />
				<LinksFooter img='/images/small_logo.png' />
			</div>
		</CountryContext.Provider>
	)
}

export default HomeUSA
