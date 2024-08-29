import { useState } from 'react'
import Carousel from '../../../components/Frylow/Landing/Carousel'
import Experts from '../../../components/Frylow/Landing/Experts'
import Footer from '../../../components/Frylow/Landing/Footer'
// import Form from '../../components/Landing/Form'

// import Header from '../../components/Landing/Header'
import HeaderTest from '../../../components/Frylow/Landing/HeaderTest'
import Intro from '../../../components/Frylow/Landing/Intro'
import MainForm from '../../../components/Frylow/Landing/MainForm'
import Results from '../../../components/Frylow/Landing/Results'
import Reviews from '../../../components/Frylow/Landing/Reviews'
import WhatIsFrylow from '../../../components/Frylow/Landing/WhatIsFrylow'
import SubmitModal from '../../../components/Frylow/Landing/modals/SubmitModal'
import SubmitTopModal from '../../../components/Frylow/Landing/modals/SubmitTopModal'

const Landing = () => {
	const [isSubmitModal, setIsSubmitModal] = useState(false)
	const [isSubmitTopModal, setIsSubmitTopModal] = useState(false)

	return (
		<div>
			<div className='min-h-screen flex flex-col'>
				<HeaderTest link='/usa/frylow/' />
				<section className='max-w-[175vh] mx-auto h-[calc(100vh-13vh)] flex items-center px-[3vh]'>
					<div className='w-full flex items-start justify-between'>
						<div className='w-2/3'>
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
				<div className='max-w-[160vh] mx-auto relative  mt-[12vh]'>
					<h1 className='font-[600] text-[5vh] text-center leading-[105%] mb-[8vh]'>
						Trusted by Thousands of Restaurants <br />
						across North America
					</h1>
					<Carousel />
				</div>

				<WhatIsFrylow />
				<Reviews />
				<Results />
				<Experts />
				<Footer country='usa' />
			</div>
			{isSubmitModal && <SubmitModal setIsSubmitModal={setIsSubmitModal} />}
			{isSubmitTopModal && (
				<SubmitTopModal setIsSubmitTopModal={setIsSubmitTopModal} />
			)}
		</div>
	)
}

export default Landing
