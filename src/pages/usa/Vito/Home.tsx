// import Certifications from '../../../components/Frylow/HomeFrylow/Certifications'
import CarouselUSA from '../../../components/Vito/HomeVito/CarouselUSA'
import Footer from '../../../components/Vito/HomeVito/Footer'
import Header from '../../../components/Vito/HomeVito/Header'
import IntroAction from '../../../components/Vito/HomeVito/IntroAction'
import IntroBulletPoints from '../../../components/Vito/HomeVito/IntroBulletPoints'
import HeaderNav from '../../../components/Vito/HomeVito/Navigation/HeaderNav'
import Results from '../../../components/Vito/HomeVito/Results'
import Reviews from '../../../components/Vito/HomeVito/Reviews'
import TryFrylow from '../../../components/Vito/HomeVito/TryFrylow'
import WhatIsVito from '../../../components/Vito/HomeVito/WhatIsVito'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

export const HomeUSA = () => {
	return (
		<CountryContext.Provider value='usa'>
			<div>
				<HeaderNav link='/usa/vito/' />
				<Header />
				<section>
					<IntroBulletPoints />
					<IntroAction />
				</section>
				<CarouselUSA />
				<WhatIsVito />
				<Reviews />
				<Results />
				<TryFrylow country='usa' />
				{/* <Certifications /> */}
				<Footer img='/images/Vito/home/vito-logo.png' />
			</div>
		</CountryContext.Provider>
	)
}
