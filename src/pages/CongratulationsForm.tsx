import { useEffect, useState } from 'react'
import {
	ChakraProvider,
	Button,
	RadioGroup,
	Radio,
	theme,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Stack,
	useToast,
} from '@chakra-ui/react'
import FilterFrequencyModal from '../components/Frylow/FollowUpForm/FilterFrequencyModal'
import OilPurchaseDrawer from '../components/Frylow/FollowUpForm/OilPurchaseDrawer'
import OilPurchaseModal from '../components/Frylow/FollowUpForm/OilPurchaseModal'
import PositionModal from '../components/Frylow/FollowUpForm/PositionModal'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CongratulationsForm = () => {
	const [fryerTemp, setFryerTemp] = useState(320)
	const [sliderTouched, setSliderTouched] = useState(false)
	const [filteringFrequency, setFilteringFrequency] = useState('')
	const [fryerOperatingHours, setFryerOperatingHours] = useState('')
	const [isBusinessSeasonal, setIsBusinessSeasonal] = useState('')
	const [jobTitle, setJobTitle] = useState('')
	const [oilPurchase, setOilPurchase] = useState<string>('')

	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
	const [isPositionModalOpen, setIsPositionModalOpen] = useState(false)
	const [isOilPurchaseModalOpen, setIsOilPurchaseModalOpen] = useState(false)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const [isFilteringMachine, setIsFilteringMachine] = useState('')
	const [canPayForPurchase, setCanPayForPurchase] = useState('')
	const [canUseOilAmount, setCanUseOilAmount] = useState('')
	const [selectedNumber, setSelectedNumber] = useState('')
	const [isThumbActive, setIsThumbActive] = useState(false)
	const [thumbColor, setThumbColor] = useState('lightgreen')
	const [formSubmitted, setFormSubmitted] = useState(false)

	const toast = useToast()

	const handleFilterFrequencyChange = (event: any) => {
		setFilteringFrequency(event.target.value)
		setIsFilterModalOpen(true)
	}

	const handleFryerOperatingHours = (event: any) => {
		setFryerOperatingHours(event.target.value)
	}

	const handleIsSeasonalChange = (value: string) => {
		setIsBusinessSeasonal(value)
	}

	const handlePositionChange = (event: any) => {
		setJobTitle(event.target.value)
		setIsPositionModalOpen(true)
	}
	const addCommas = (num: string) =>
		num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	const removeNonNumeric = (num: string) =>
		num.toString().replace(/[^0-9]/g, '')

	const handleOilPurchaseChange = (event: any) => {
		setOilPurchase(addCommas(removeNonNumeric(event.target.value)))
	}
	// @ts-ignore
	const [searchParams, setSearchParams] = useSearchParams()
	const ghlId = searchParams.get('ghl_id')
	const formData = {
		fryerTemp,
		filteringFrequency,
		fryerOperatingHours,
		isBusinessSeasonal,
		jobTitle,
		oilPurchase,
		isFilteringMachine,
		canPayForPurchase,
		canUseOilAmount,
		selectedNumber,
		ghl_id: ghlId,
	}

	const navigate = useNavigate()

	const handleFormSubmit = async (event: any) => {
		event.preventDefault()

		if (
			filteringFrequency.trim() === '' ||
			fryerOperatingHours.trim() === '' ||
			jobTitle.trim() === '' ||
			oilPurchase.trim() === '' ||
			isBusinessSeasonal.trim() === '' ||
			!sliderTouched
		) {
			setFormSubmitted(true)
			toast({
				title: <>Complete required fields</>,
				position: 'bottom-right',
				status: 'error',
				isClosable: true,
			})

			return
		} else {
			navigate('/thank-you')
		}

		try {
			const response = await fetch(
				'https://fourel.epicgamer.org/contact/update',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)
			if (!response.ok) {
				throw new Error('Failed to submit data')
			}
			const responseData = await response.json()
			console.log('Response from server:', responseData)
		} catch (error: any) {
			console.error('Error:', error.message)
		}
	}

	const handleModalClose = () => {
		setIsFilterModalOpen(false)
		setIsPositionModalOpen(false)
		setIsOilPurchaseModalOpen(false)
	}

	const handleRadioChange = (value: string, field: any) => {
		if (value === 'no' && field === 'oil-purchase') {
			setIsDrawerOpen(true)
		} else {
			if (field === 'filter-frequency') setIsFilteringMachine(value)
			else if (field === 'position') setCanPayForPurchase(value)
			else if (field === 'oil-purchase') setCanUseOilAmount(value)
		}
	}
	const [isThumbPressed, setIsThumbPressed] = useState(false)

	useEffect(() => {
		let timer: number | undefined
		if (!isThumbActive && !isThumbPressed) {
			timer = window.setTimeout(() => {
				setThumbColor('#BBFFD2')
			}, 300)
		} else {
			setThumbColor('white')
		}
		return () => {
			if (timer) {
				clearTimeout(timer)
			}
		}
	}, [isThumbActive, isThumbPressed])

	const isFieldEmpty = (value: string) => {
		return value.trim() === ''
	}
	return (
		<ChakraProvider theme={theme}>
			<section className='bg-[#EDF0F9] md:bg-[#fff]  w-full lg:h-screen h-screen items-start flex md:items-center md:my-8 lg:my-0 md:px-12 xl:px-[20vh]'>
				<div className='bg-[#EDF0F9] px-4 md:px-[7vh]  md:py-[5vh] flex flex-col rounded-lg w-full max-w-[203vh] mx-auto '>
					<div className='flex flex-col justify-center'>
						<h2 className='text-center font-[500] text-xl md:text-[3vh]'>
							<b className='text-[#416CF6]'>Congratulations!</b>
							<br className=' md:hidden' />
							&nbsp;&nbsp;&nbsp;You qualify for a
							<b className='text-[#416CF6]'> FREE</b> Frylow trial.
						</h2>
						<i className='text-center mx-auto mt-3 md:mt-[1.5vh] text-lg lg:text-[2.5vh] leading-[20px]'>
							Please answer the following questions so we may prepare for your
							trial.
						</i>
					</div>
					<p className='text-[1.4vh] text-start  mt-6 md:mt-[4vh]'>
						<b className='text-red-600 text-[2vh]'>*</b> indicates required
						fields
					</p>
					<div className='flex flex-col lg:flex-row gap-3 md:gap-[3vh] lg:items-end justify-between'>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label
								htmlFor='temperature'
								className='mb-2 text-base md:text-[2vh] font-[700]'
							>
								At what temperature do you set your fryers?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<Slider
								id='temperature'
								defaultValue={320}
								min={320}
								max={380}
								step={5}
								onChange={(val) => {
									setFryerTemp(val)
									setSliderTouched(true)
								}}
								onChangeStart={() => {
									setIsThumbActive(true)
									setIsThumbPressed(true)
								}}
								onChangeEnd={() => {
									setIsThumbActive(false)
									setIsThumbPressed(false)
								}}
							>
								<SliderTrack
									bg='#BDCAF6'
									border={
										formSubmitted && !sliderTouched
											? '2px solid red'
											: '2px solid transparent'
									}
								>
									<SliderFilledTrack bg='#416CF6' />
								</SliderTrack>
								<SliderThumb
									fontSize='1.3vh'
									className='p-[2vh]'
									bg={thumbColor}
									sx={{
										_hover: { bg: 'white' },
										_active: { bg: 'white' },
									}}
								>
									{fryerTemp}°
								</SliderThumb>
							</Slider>
						</div>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label
								htmlFor='filter-frequency'
								className='mb-2 text-base md:text-[2vh] font-[700]'
							>
								How frequently do you filter your fryers/oil?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<select
								id='filter-frequency'
								className={`p-[1vh] rounded-lg border ${
									formSubmitted && isFieldEmpty(filteringFrequency)
										? 'border-red-500'
										: 'border-[#416CF6]'
								}  font-[600] text-sm md:text-[2vh] h-[5vh] custom-select custom-select ${
									isFieldEmpty(filteringFrequency) ? 'bg-white' : 'bg-blue-100'
								}`}
								onChange={handleFilterFrequencyChange}
								value={filteringFrequency}
							>
								<option value=''>Select frequency</option>
								<option value='daily'>Daily</option>
								<option value='twice-a-week'>Twice a week</option>
								<option value='3-times-a-week'>3 times a week</option>
								<option value='4-times-a-week'>4 times a week</option>
								<option value='occasionally'>Occasionally</option>
								<option value='never'>Never</option>
							</select>
						</div>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label
								htmlFor='fryer-size'
								className='mb-2 text-base md:text-[2vh] font-[700] leading-[115%]'
							>
								How many hours per day are your
								<br /> fryers operating?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<select
								id='fryer-size'
								className={`p-[1vh] rounded-lg border ${
									formSubmitted && isFieldEmpty(fryerOperatingHours)
										? 'border-red-500'
										: 'border-[#416CF6]'
								}  font-[600] text-sm md:text-[2vh] h-[5vh] custom-select custom-select ${
									isFieldEmpty(fryerOperatingHours) ? 'bg-white' : 'bg-blue-100'
								}`}
								onChange={handleFryerOperatingHours}
								value={fryerOperatingHours}
							>
								<option value=''>Select time</option>
								<option value='under_8'>Under 8 hours</option>
								<option value='8-12'>8 - 12 hours</option>
								<option value='3-16'>13 - 16 hours</option>
								<option value='over_16'>Over 16 hours</option>
							</select>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row justify-between mt-2 md:mt-4 lg:mt-[5vh] lg:items-end gap-3 md:gap-[3vh]'>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label className=' text-base md:text-[2vh] font-[700] md:mb-2 md:mb-[5vh]'>
								Is your business seasonal?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<div className='flex items-center'>
								<RadioGroup
									value={isBusinessSeasonal}
									onChange={handleIsSeasonalChange}
								>
									<Stack direction='row'>
										<Radio
											value='true'
											border={`${
												formSubmitted && isFieldEmpty(isBusinessSeasonal)
													? '2px solid red'
													: '2px solid #416CF6'
											}`}
											id='isChainFranchiseYes'
											defaultChecked
											boxSize='3vh'
										>
											<span className='mr-[2vh] font-[700] text-base md:text-[2vh] '>
												Yes
											</span>
										</Radio>
										<Radio
											value='false'
											border={`${
												formSubmitted && isFieldEmpty(isBusinessSeasonal)
													? '2px solid red'
													: '2px solid #416CF6'
											}`}
											id='isChainFranchiseNo'
											ml='4vh'
											boxSize='3vh'
										>
											<span className='mr-[2vh] font-[700] text-base md:text-[2vh] '>
												No
											</span>
										</Radio>
									</Stack>
								</RadioGroup>
							</div>
						</div>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label
								htmlFor='position'
								className='mb-2 text-base md:text-[2vh] font-[700] leading-[115%]'
							>
								What’s your position in this business/organization?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<select
								id='position'
								className={`p-[1vh] rounded-lg border ${
									formSubmitted && isFieldEmpty(jobTitle)
										? 'border-red-500'
										: 'border-[#416CF6]'
								}  font-[600] text-sm md:text-[2vh] h-[5vh] custom-select custom-select ${
									isFieldEmpty(jobTitle) ? 'bg-wgite' : 'bg-blue-100'
								}`}
								onChange={handlePositionChange}
								value={jobTitle}
							>
								<option value=''>Select your position</option>
								<option value='Manager'>Manager</option>
								<option value='CEO'>CEO</option>
								<option value='President'>President</option>
								<option value='Director'>Director</option>
								<option value='C-level'>
									C-level team (President, CEO, COO, CFO)
								</option>
								<option value='Executive Chef'>Executive Chef</option>
								<option value='Corporate Executive Chef'>
									Corporate Executive Chef F&B
								</option>
								<option value='Director F&B'>
									Director (Food and Beverage Director)
								</option>
								<option value='Director of Culinary'>
									Director of Culinary
								</option>
								<option value='GM'>GM (General Manager)</option>
								<option value='Owner'>Owner</option>
								<option value='Franchisee partner'>Franchisee partner</option>
							</select>
						</div>
						<div className='flex flex-col w-full lg:w-[30%]'>
							<label
								htmlFor='oil-purchase'
								className='mb-2 text-base md:text-[2vh] font-[700] leading-[115%] tracking-[-0.03vh]'
							>
								Based on last year’s purchase orders, what was the total number
								of boxes/pails of fry-oil used?{' '}
								<span className='text-red-600 text-[2.5vh]'>*</span>
							</label>
							<div className='flex gap-[1vh]'>
								<input
									type='text'
									id='oilPurchase'
									value={oilPurchase}
									onChange={handleOilPurchaseChange}
									placeholder='Enter total # of boxes/pails purchase'
									className={`p-[1vh] rounded-lg border ${
										formSubmitted && isFieldEmpty(oilPurchase)
											? 'border-red-500'
											: 'border-[#416CF6]'
									}  font-[600] w-full h-[5vh] text-sm md:text-[2vh] ${
										isFieldEmpty(oilPurchase) ? 'bg-white' : 'bg-blue-100'
									}`}
								/>
								<Button
									onClick={() => setIsOilPurchaseModalOpen(true)}
									bg='red'
									h='5vh'
									color='white'
									fontSize={['16px', '2vh']}
									_hover={{ bg: '#6E0000' }}
									className='text-[2vh]'
								>
									Apply
								</Button>
							</div>
						</div>
					</div>
					<button
						type='submit'
						className='bg-[#006A54] border border-[#006A54] text-white rounded-xl lg:w-[40%] font-[700] py-2 md:py-[2vh] mt-4 md:mt-[14vh] w-full text-lgmd:text-2xl lg:text-[3vh] self-center hover:bg-[#EDF0F9] hover:text-[#006A54] transition-all'
						onClick={handleFormSubmit}
					>
						Arrange FREE trial with a Frylow expert
					</button>
				</div>
				<OilPurchaseModal
					isOpen={isOilPurchaseModalOpen}
					onClose={handleModalClose}
					oilPurchase={oilPurchase}
					handleRadioChange={handleRadioChange}
				/>
				<FilterFrequencyModal
					isOpen={isFilterModalOpen}
					onClose={handleModalClose}
					handleRadioChange={handleRadioChange}
				/>
				<PositionModal
					isOpen={isPositionModalOpen}
					onClose={handleModalClose}
					handleRadioChange={handleRadioChange}
				/>

				<OilPurchaseDrawer
					isOpen={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					selectedNumber={selectedNumber}
					setSelectedNumber={setSelectedNumber}
				/>
			</section>
		</ChakraProvider>
	)
}

export default CongratulationsForm
