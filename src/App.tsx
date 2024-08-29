import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
	gtmId: 'GTM-5WM6NCVJ',
}
TagManager.initialize(tagManagerArgs)

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
	useLocation,
} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LandingUSA from './pages/usa/Frylow/LandingUSA'
import LandingUSA2 from './pages/usa/Frylow/LandingUSA2'
import CongratulationsForm from './pages/CongratulationsForm'
import BlueForm from './pages/BlueForm'
import ThankYou from './pages/ThankYou'
import HomeUSA from './pages/usa/Frylow/HomeUSA'
import LandingCA from './pages/canada/Frylow/LandingCA'
import LandingCA2 from './pages/canada/Frylow/LandingCA2'
import HomeCA from './pages/canada/Frylow/HomeCA'
import About from './pages/usa/Frylow/About'
import AboutCA from './pages/canada/Frylow/AboutCA'
import BenefitsUSA from './pages/usa/Frylow/BenefitsUSA'
import BenefitsCA from './pages/canada/Frylow/BenefitsCA'
import RoutesList from './pages/Routes'
import Reviews from './pages/usa/Frylow/Reviews'
import ReviewsCA from './pages/canada/Frylow/ReviewsCA'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import FAQPage from './pages/FAQ'
import { HomeUSA as VitoHomeUSA } from './pages/usa/Vito/Home'

const theme = extendTheme({
	fonts: {
		body: 'Montserrat, sans-serif',
		heading: 'Montserrat, sans-serif',
	},
})

function EnforceTrailingSlash() {
	const { pathname } = useLocation()
	if (!pathname.endsWith('/')) {
		return <Navigate to={`${pathname}/`} />
	}
	return <Outlet />
}

function App() {
	// @ts-ignore
	if (window.dataLayer) {
		// @ts-ignore
		window.dataLayer.push({
			event: 'pageview',
		})
	}
	return (
		<ChakraProvider theme={theme}>
			<Helmet>
				{/* Google Analytics 4 */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-NWP5T00M3Q'
				></script>
				<script>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NWP5T00M3Q');
          `}
				</script>
				{/* Google Tag Manager */}
				<script>
					{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55DD9QSX');
          `}
				</script>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					{`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55DD9QSX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
				</noscript>
			</Helmet>
			<BrowserRouter>
				<Routes>
					<Route element={<EnforceTrailingSlash />}>
						<Route path='usa/frylow/' element={<HomeUSA />} />
						<Route path='ca/frylow/' element={<HomeCA />} />
						<Route
							path='usa/frylow/cost-savings-estimate/'
							element={<LandingUSA />}
						/>
						<Route
							path='usa/frylow/cost-savings-estimate2/'
							element={<LandingUSA2 />}
						/>
						<Route
							path='ca/frylow/cost-savings-estimate/'
							element={<LandingCA />}
						/>
						<Route
							path='ca/frylow/cost-savings-estimate2/'
							element={<LandingCA2 />}
						/>
						<Route
							path='/congratulations-form/'
							element={<CongratulationsForm />}
						/>
						<Route
							path='/usa/frylow/cost-savings-estimate-form/'
							element={
								<BlueForm
									country={'us'}
									event='FS_LandingUSA'
									webHook='https://hook.us1.make.com/454fku3abs31j7h9kd2ffat4q5wkomrg'
								/>
							}
						/>
						<Route
							path='/ca/frylow/cost-savings-estimate-form/'
							element={
								<BlueForm
									country={'ca'}
									event='FS_LandingCanada'
									webHook='https://hook.us1.make.com/zu1bs8uzy2wsp6r6u56ap29htkedmlf3'
								/>
							}
						/>
						<Route path='/thank-you/' element={<ThankYou />} />
						<Route path='usa/frylow/about' element={<About />} />
						<Route path='ca/frylow/about' element={<AboutCA />} />
						<Route path='usa/frylow/benefits' element={<BenefitsUSA />} />
						<Route path='ca/frylow/benefits' element={<BenefitsCA />} />
						<Route path='usa/frylow/reviews' element={<Reviews />} />
						<Route path='ca/frylow/reviews' element={<ReviewsCA />} />
						<Route path='routes' element={<RoutesList />} />
						<Route
							path=':countrySlug/frylow/contact-us/'
							element={<ContactUs />}
						/>
						<Route path=':countrySlug/frylow/faq/' element={<FAQPage />} />
						<Route path='/' element={<Home />} />
						<Route path='/usa/vito/' element={<VitoHomeUSA />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	)
}

export default App
