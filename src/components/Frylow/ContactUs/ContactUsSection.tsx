import ContactUsForm from './ContactUsForm'
import { useContext } from 'react'
// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'
type Country = {
	usa: 'usa'
	ca: 'ca'
}

const ContactUsSection = () => {
	const logosMap: Record<keyof Country, string> = {
		usa: '/images/small_logo.png',
		ca: '/images/small_logoCA.png',
	}
	const country = useContext(CountryContext)

	const logoUrl = logosMap[country as keyof Country]

	const sectionTitleClass =
		'text-sm md:text-xl lg:text-[2.3vh] font-bold text-[#000F3D]'
	const sectionSubTitleClass =
		'text-sm lg:text-[2.1vh] text-[#000F3D] leading-[100%]'
	return (
		<section className='lg:max-w-[166vh] mx-auto my-6 md:mt-14 lg:mt-[4vh] w-full px-[20px] lg:px-[3vh] mb-24 flex flex-col justify-between gap-4'>
			<div className='flex flex-col w-fit mx-auto lg:mb-1'>
				<h2 className='font-[600] text-3xl mb-0 lg:mb-6 lg:text-[5vh] text-center '>
					Contact Us
				</h2>
			</div>
			<div className='flex gap-8 flex-col-reverse lg:flex-row'>
				<div className='h-100 w-100 lg:w-1/2'>
					<div
						className='text-[14px] lg:text-[2.1vh] h-full flex flex-col justify-between gap-5 lg:gap-0'
						style={{ textAlign: 'justify' }}
					>
						<div className='flex justify-start items-center space-x-7 '>
							<img
								height={100}
								width={100}
								alt={'Frylow logo'}
								src={logoUrl}
								className='w-[90px] h-[90px]'
								loading='lazy'
							/>
							<div className='text-[24px] font-[600] leading-8 lg:text-[28px] xl:text-3xl'>
								Guaranteed Fry-Oil
								<br /> Cost Reduction
							</div>
						</div>
						<div className='flex gap-[1vh]'>
							<img
								alt={'drop of oil'}
								src='/images/kaplya.png'
								className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
							/>
							<div className='flex flex-col'>
								<p className={sectionTitleClass}>
									Reduce Fry-Oil cost up to 50% or more
								</p>
								<p className={sectionSubTitleClass}>
									<i>Guaranteed oil cost reduction</i>
								</p>
							</div>
						</div>
						<div className='flex gap-[1vh]'>
							<img
								alt={'drop of oil'}
								src='/images/kaplya.png'
								className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
							/>
							<div className='flex flex-col'>
								<p className={sectionTitleClass}>
									Lighter, Crispier, and Tastier fried food
								</p>
								<p className={sectionSubTitleClass}>
									<i>Absorbs less oil</i>
								</p>
							</div>
						</div>
						<div className='flex gap-[1vh]'>
							<img
								alt={'drop of oil'}
								src='/images/kaplya.png'
								className='lg:w-[3vh] lg:h-[3vh] h-6 w-6'
							/>
							<div className='flex flex-col'>
								<p className={`${sectionTitleClass} leading-[100%]`}>
									Simple to Install, Use and Maintain with
									<br className='hidden lg:block' /> <i>no</i> ongoing costs ...
									5-year Warranty
								</p>
							</div>
						</div>
						{/*<HomeBulletpoints wrapperClass='flex flex-col justify-between gap-5 lg:gap-2' sectionTitleClass = 'text-sm md:text-xl lg:text-[2vh] font-bold text-[#000F3D]'*/}
						{/*	sectionSubTitleClass = 'text-sm lg:text-[1.9vh] text-[#000F3D] leading-[100%]' />*/}
						<img
							width={579}
							height={224}
							alt={'Frylow inside fryer'}
							src={'/images/frylow-inside-fryer.webp'}
							className='w-full h-[44%]  object-cover rounded-xl'
							loading='lazy'
						/>
					</div>
				</div>

				<ContactUsForm />
			</div>
		</section>

		/*
		<div
					className='text-[14px] lg:w-[73vh] lg:text-[2.1vh] space-y-8 mb-8 lg:mb-0 flex-1 flex flex-col'
					style={{textAlign: 'justify'}}
				>
					<div className='flex justify-start items-center space-x-5'>
						<img
							height={140}
							width={140}
							alt={'Frylow logo'}
							src={logoUrl}
							className='w-[140px] h-[140px] lg:w-[140px] lg:h-[140px]'
							loading='lazy'
						/>
						<div className='text-[18px] font-[600] leading-8 lg:text-[28px]'>
							Guaranteed Fry-Oil
							<br/> Cost Reduction
						</div>
					</div>
					<HomeBulletpoints wrapperClass='flex flex-col justify-between w-full gap-5 lg:gap-2'/>
					<img
						width={579}
						height={224}
						alt={'Frylow inside fryer'}
						src={'/images/frylow-inside-fryer.webp'}
						className='w-full mt-auto'
						loading='lazy'
					/>
				</div>

				<ContactUsForm/>
				*/
	)
}

export default ContactUsSection
