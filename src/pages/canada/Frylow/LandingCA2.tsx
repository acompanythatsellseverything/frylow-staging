import Carousel from '../../../components/Frylow/LandingCA/Carousel'
import Footer from '../../../components/Frylow/Landing/Footer'
import HeaderTest from '../../../components/Frylow/Landing/HeaderTest'
import Intro from '../../../components/Frylow/LandingCA/Intro'
import Reviews from '../../../components/Frylow/LandingCA/Reviews'
import WhatIsFrylow from '../../../components/Frylow/LandingCA/WhatIsFrylow'
import ResultsCA from '../../../components/Frylow/LandingCA/ResultsCA'
import ExpertsMobileCA from '../../../components/Frylow/LandingCA/ExpertsMobileCA'
import ExpertsCA from '../../../components/Frylow/LandingCA/ExpertsCA'
import MainForm from '../../../components/Frylow/Landing/MainForm'
import { useState } from 'react'
import SubmitModal from '../../../components/Frylow/Landing/modals/SubmitModal'
import SubmitTopModal from '../../../components/Frylow/Landing/modals/SubmitTopModal'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

const LandingCA2 = () => {
	const [isSubmitModal, setIsSubmitModal] = useState(false)
	const [isSubmitTopModal, setIsSubmitTopModal] = useState(false)
	return (
		<CountryContext.Provider value='ca'>
			<div>
				<div className='min-h-screen flex flex-col'>
					<HeaderTest link='/frylow-canada' />
					<section className='lg:max-w-[175vh] mx-auto  2xl:h-[calc(100vh-13vh)] flex items-center lg:px-[3vh]'>
						<div className='w-full flex items-start justify-between flex-col xl:flex-row'>
							<div className='xl:w-2/3'>
								<Intro />
							</div>
							<div className='w-full xl:w-[50%]'>
								<MainForm
									country='ca'
									event='FS_LandingCanada'
									webHook='https://hook.us1.make.com/zu1bs8uzy2wsp6r6u56ap29htkedmlf3'
									setIsSubmitModal={setIsSubmitModal}
									setIsSubmitTopModal={setIsSubmitTopModal}
								/>
							</div>
						</div>
					</section>
					<div className='xl:max-w-[160vh] w-full mx-auto relative mt-10 lg:mt-12vh  md:px-8'>
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
				</div>
				{isSubmitModal && <SubmitModal setIsSubmitModal={setIsSubmitModal} />}
				{isSubmitTopModal && (
					<SubmitTopModal setIsSubmitTopModal={setIsSubmitTopModal} />
				)}
			</div>
		</CountryContext.Provider>
	)
}

export default LandingCA2
