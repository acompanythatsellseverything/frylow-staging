import HeaderNav from '../components/Frylow/HomeFrylow/HeaderNav.tsx'
import LinksFooter from '../components/Frylow/HomeFrylow/LinksFooter.tsx'
// @ts-ignore
import { CountryContext } from '../providers/CountryContext'
import FAQPageSection from '../components/Frylow/FAQ/FAQPageSection.tsx'
import { useParams } from 'react-router-dom'

const FAQPage = () => {
	const { countrySlug } = useParams()

	return (
		<CountryContext.Provider value={countrySlug}>
			<div className='min-h-screen flex flex-col'>
				<HeaderNav link={`/${countrySlug}/frylow/`} />
				<FAQPageSection />
				<LinksFooter img='/images/small_logo.png' />
			</div>
		</CountryContext.Provider>
	)
}

export default FAQPage
