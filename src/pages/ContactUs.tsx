import ContactUsSection from '../components/Frylow/ContactUs/ContactUsSection'
import HeaderNav from '../components/Frylow/HomeFrylow/HeaderNav'
import LinksFooter from '../components/Frylow/HomeFrylow/LinksFooter'
import {
	GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';
// @ts-ignore
import { CountryContext } from '../providers/CountryContext'
import { useParams } from 'react-router-dom'

const ContactUs = () => {
	const { countrySlug } = useParams()
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6Lf5gS8qAAAAABAaZzDItXxHHU7sNhpEOPzm7MgR">

			<CountryContext.Provider value={countrySlug}>
				<div className='min-h-screen flex flex-col'>
					<HeaderNav link={`/${countrySlug}/frylow/`} />
					<ContactUsSection />
					<LinksFooter img='/images/small_logo.png' />
				</div>
			</CountryContext.Provider>
		</GoogleReCaptchaProvider>
	)
}

export default ContactUs
