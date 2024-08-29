import { useState } from 'react'
import Carousel from '../../../components/Frylow/Landing/Carousel'
import Experts from '../../../components/Frylow/Landing/Experts'
import ExpertsMobile from '../../../components/Frylow/Landing/ExpertsMobile'
import Footer from '../../../components/Frylow/Landing/Footer'
import HeaderTest from '../../../components/Frylow/Landing/HeaderTest'
import Intro from '../../../components/Frylow/Landing/Intro'
import MainForm from '../../../components/Frylow/Landing/MainForm'
import Results from '../../../components/Frylow/Landing/Results'
import Reviews from '../../../components/Frylow/Landing/Reviews'
import WhatIsFrylow from '../../../components/Frylow/Landing/WhatIsFrylow'
import SubmitModal from '../../../components/Frylow/Landing/modals/SubmitModal'
import SubmitTopModal from '../../../components/Frylow/Landing/modals/SubmitTopModal'

const LandingUSA2 = () => {
	const [isSubmitModal, setIsSubmitModal] = useState(false)
	const [isSubmitTopModal, setIsSubmitTopModal] = useState(false)
	return (
		<div>
			<div className='min-h-screen flex flex-col'>
				<HeaderTest link='/frylow-usa' />
				<section className='lg:max-w-[175vh] mx-auto  2xl:h-[calc(100vh-13vh)] flex items-center lg:px-[3vh]'>
					<div className='w-full flex items-start justify-between flex-col xl:flex-row'>
						<div className='xl:w-2/3'>
							<Intro />
						</div>
						<div className='w-full xl:w-[50%]'>
							<MainForm
								country='us'
								event='FS_LandingUSA'
								webHook='https://hook.us1.make.com/454fku3abs31j7h9kd2ffat4q5wkomrg'
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
				<Results />
				<Experts />
				<ExpertsMobile />
				<Footer country='usa' />
			</div>
			{isSubmitModal && <SubmitModal setIsSubmitModal={setIsSubmitModal} />}
			{isSubmitTopModal && (
				<SubmitTopModal setIsSubmitTopModal={setIsSubmitTopModal} />
			)}
		</div>
	)
}

export default LandingUSA2
