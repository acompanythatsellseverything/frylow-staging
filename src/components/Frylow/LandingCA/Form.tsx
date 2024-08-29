import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import Above60Modal from '../Landing/modals/Above60Modal'
import PhoneInputField from '../Landing/Form/PhoneInputField'
import Above100Modal from '../Landing/modals/Above100Modal'
import TagManager from 'react-gtm-module'

const FormCA = () => {
	const [isOpenAbove60Modal, setIsOpenAbove60Modal] = useState(false)
	const [above60InputValue, setAbove60InputValue] = useState('')
	const [isOpen100AboveModal, setIsOpen100AboveModal] = useState(false)
	const [hundredAboveInputValue, setHundredAboveInputValue] = useState('')
	const [isSubmitModal, setIsSubmitModal] = useState(false)
	const [isSubmitTopModal, setIsSubmitTopModal] = useState(false)

	const handleSubmit = async (values: any) => {
		const tagManagerArgs = {
			gtmId: 'G-NWP5T00M3Q',
			events: {
				event: 'FS_LandingCanada',
				userData: {
					values,
				},
			},
		}

		let friersNum = values.fryerAmountOneLocation
		let freq = values.oilChangeAmountPW
		if (
			friersNum !== '1' &&
			friersNum !== '2' &&
			freq !== '1' &&
			freq !== 'occasionally' &&
			freq !== 'none'
		) {
			setIsSubmitTopModal(true)
		} else {
			setIsSubmitModal(true)
		}
		try {
			const response = await fetch(
				'https://fourel.epicgamer.org/contact/create/ca',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
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

		fetch('https://hook.us1.make.com/zu1bs8uzy2wsp6r6u56ap29htkedmlf3', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const contentType = response.headers.get('content-type')
				if (contentType && contentType.includes('application/json')) {
					return response.json()
				} else {
					return response.text()
				}
			})
			.then(() => {
				TagManager.initialize(tagManagerArgs)
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error)
			})
	}
	const [above90Size, setAbove90Size] = useState('')
	const [above90Count, setAbove90Count] = useState(0)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [quantities, setQuantities] = useState({
		'25/35 lbs': 0,
		'40/50 lbs': 0,
		'50/70 lbs': 0,
		'75/85 lbs': 0,
	})

	const handleQuantityChange = (size: any, change: any) => {
		setQuantities((prevQuantities: any) => ({
			...prevQuantities,
			[size]: Math.max(prevQuantities[size] + change, 0),
		}))
	}

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}
	console.log(above60InputValue)
	return (
		<div className=' w-full rounded-lg  relative drop-shadow-md px-[20px] lg:px-0'>
			{isSubmitModal && (
				<div className='absolute bg-white  mr-[20px] md:w-full p-4  md:h-2/4 top-[20vh] rounded-xl border border-blue-500 border-2 flex flex-col items-center justify-evenly lg:p-[4vh]'>
					<img
						src='https://segment.prod.bidr.io/associate-segment?buzz_key=5x5dsp&segment_key=5x5dsp-1941&value='
						height='0'
						width='0'
					/>
					<p
						className='absolute top-[0.4vh] md:p-[0.7vh] right-[2vh] text-xl cursor-pointer'
						onClick={() => setIsSubmitModal(false)}
					>
						✕
					</p>
					<p className='text-black text-[4vh] font-bold'>Success!</p>
					<p className='lg:text-[3vh] text-lg text-center font-medium mt-4'>
						Your <span className='text-blue-500'>Cost Savings Estimate</span>
						has been sent to your <i>email inbox.</i>
					</p>
				</div>
			)}
			{isSubmitTopModal && (
				<div className='absolute bg-white  mr-[20px] md:w-full p-4  md:h-2/4 top-[20vh] rounded-xl border border-blue-500 border-2 flex flex-col items-center justify-evenly lg:p-[4vh]'>
					<img
						src='https://segment.prod.bidr.io/associate-segment?buzz_key=5x5dsp&segment_key=5x5dsp-1941&value='
						height='0'
						width='0'
					/>
					<p
						className='absolute top-[0.4vh] md:p-[0.7vh] right-[2vh] text-xl cursor-pointer'
						onClick={() => setIsSubmitTopModal(false)}
					>
						✕
					</p>
					<p className='text-blue-500 text-2xl lg:text-[4vh] font-bold'>
						Congratulations !
					</p>
					<p className='lg:text-[3vh] text-lg text-center font-medium mt-4'>
						You qualify for a FREE Frylow trial.
						<br /> Open your <i>Congratulations email</i> from your inbox to
						arrange your free trial.
					</p>
				</div>
			)}
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					companyName: '',
					email: '',
					phone: '',
					fryersSize: '',
					fryerOilPailBoxCost: '',
					oilChangeAmountPW: '',
					isChainFranchise: '',
					locationAmount: '',
				}}
				onSubmit={handleSubmit}
				validate={(values) => {
					const errors: any = {}
					if (!values.firstName) {
						errors.firstName = 'Required'
					}
					if (!values.lastName) {
						errors.lastName = 'Required'
					}
					if (!values.companyName) {
						errors.companyName = 'Required'
					}
					if (!values.email) {
						errors.email = 'Required'
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address'
					}
					if (!values.phone) {
						errors.phone = 'Required'
					} else if (!/^\+?\d{10,15}$/.test(values.phone)) {
						errors.phone = 'Invalid phone number'
					}
					if (!values.fryersSize) {
						errors.fryersSize = 'Required'
					}
					if (!values.fryerOilPailBoxCost) {
						errors.fryerOilPailBoxCost = 'Required'
					}
					if (!values.oilChangeAmountPW) {
						errors.oilChangeAmountPW = 'Required'
					}
					if (!values.isChainFranchise) {
						errors.isChainFranchise = 'Required'
					}
					return errors
				}}
			>
				{({ errors, touched, setFieldValue, values }) => (
					<Form>
						<div className='text-center w-full bg-[#EDF0F9] pb-0 lg:pb-0  p-[1vh] lg:p-[3vh]  rounded-t-lg mt-8 xl:mt-0'>
							<Above60Modal
								isOpen={isOpenAbove60Modal}
								setIsOpen={setIsOpenAbove60Modal}
								value={above60InputValue}
								setValue={setAbove60InputValue}
								setFieldValue={setFieldValue}
							/>
							<Above100Modal
								isOpen={isOpen100AboveModal}
								setIsOpen={setIsOpen100AboveModal}
								value={hundredAboveInputValue}
								setValue={setHundredAboveInputValue}
								setFieldValue={setFieldValue}
							/>
							<h2 className='lg:text-[2.3vh] font-[500]'>
								<b>Calculate</b> your Restaurant Fry-Oil expense
							</h2>
							<h2 className='lg:text-[2.3vh] mt-[0.3vh]'>
								<b className='text-[#416CF6]'>FREE</b> Cost Savings Estimate
							</h2>
							<i>
								<p className='lg:text-[2.3vh] text-[#416CF6] mt-[0.3vh]'>
									Qualify for a <b>no</b> obligation, <b>no</b> cost trial.
								</p>
							</i>
							<p className='text-[1.4vh] text-start mt-[0.5vh] md:mt-[1vh]'>
								<b className='text-red-600 text-[2vh]'>*</b> indicates required
								fields
							</p>
						</div>
						<div className=' bg-[#EDF0F9] p-[1vh] lg:p-[3vh] pt-0 rounded-b-lg lg:h-[56vh] flex flex-col justify-between'>
							<div className='flex gap-[0.5vh] md:gap-[3vh] mb-[1vh] flex-col lg:flex-row'>
								<div className='lg:w-1/2'>
									<label
										htmlFor='firstName'
										className='text-sm md:text-2vh md:text-2vh md:text-[1.7vh]'
									>
										<b>
											First name{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										type='text'
										id='firstName'
										name='firstName'
										className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
											errors.firstName && touched.firstName
												? 'border-red-500'
												: 'border-[#416CF6]'
										} ${values.firstName ? 'bg-blue-100' : 'bg-white'}`}
									/>
								</div>
								<div className='lg:w-1/2'>
									<label
										htmlFor='lastName'
										className='text-sm md:text-2vh md:text-2vh md:text-[1.7vh]'
									>
										<b>
											Last name{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										type='text'
										id='lastName'
										name='lastName'
										className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
											errors.lastName && touched.lastName
												? 'border-red-500'
												: 'border-[#416CF6]'
										} ${values.lastName ? 'bg-blue-100' : 'bg-white'}`}
									/>
								</div>
							</div>
							<div>
								<div className='flex gap-[0.5vh] md:gap-[3vh] mb-[1vh] flex-col lg:flex-row lg:items-end'>
									<div className='lg:w-1/2'>
										<label
											htmlFor='companyName'
											className='text-sm md:text-2vh md:text-[1.7vh]'
										>
											<p className='font-[700]'>
												Restaurant or Company Name{' '}
												<span className='text-red-600 text-[2vh]'>*</span>
											</p>
										</label>
										<Field
											type='text'
											id='companyName'
											name='companyName'
											className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
												errors.companyName && touched.companyName
													? 'border-red-500'
													: 'border-[#416CF6]'
											} ${values.companyName ? 'bg-blue-100' : 'bg-white'}`}
										/>
									</div>
									<div className='lg:w-1/2'>
										<label
											htmlFor='email'
											className='text-sm md:text-2vh md:text-[1.7vh]'
										>
											<b>
												Email Address{' '}
												<span className='text-red-600 text-[2vh]'>*</span>
											</b>
										</label>
										<Field
											type='email'
											id='email'
											name='email'
											className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
												errors.email && touched.email
													? 'border-red-500'
													: 'border-[#416CF6]'
											} ${values.email ? 'bg-blue-100' : 'bg-white'} `}
										/>
									</div>
								</div>
							</div>
							<div className='flex gap-[0.5vh] md:gap-[3vh]  flex-col lg:flex-row'>
								<PhoneInputField errors={errors} touched={touched} />
								<div className='lg:w-1/2'>
									<label
										htmlFor='fryersSize'
										className='text-sm md:text-2vh md:text-[1.7vh]'
									>
										<b>
											Number and Sizes of your fryers{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<div
										className={`w-full  rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border cursor-pointer overflow-hidden ${
											errors.fryersSize && touched.fryersSize
												? 'border-red-500'
												: 'border-[#416CF6]'
										} ${values.fryersSize ? 'bg-blue-100' : 'bg-white'}`}
										onClick={handleOpenModal}
									>
										{Object.entries(quantities)
											/* @ts-ignore */
											.filter(([size, value]) => value !== 0)
											.map(([size, value]) => `${size} - ${value}`)
											.join(', ')}
									</div>
								</div>
								{isModalOpen && (
									<div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center rounded-xl'>
										<div className='bg-white p-4 rounded-xl w-[80%] border border-blue-500 border-[0.4vh]'>
											<div className='flex justify-between items-center mb-4 relative'>
												<span className='text-xl lg:text-[2.5vh] font-bold'>
													Select Numbers of each fryer Size
												</span>
												<img
													src='/images/red-arrow.png'
													className='absolute h-[3vh] md:h-[4vh] right-5 lg:right-[4vh] bottom-[-1vh]'
												/>
												<span
													onClick={handleCloseModal}
													className='lg:text-[4vh] cursor-pointer text-blue-500 font-bold text-xl'
												>
													X
												</span>
											</div>
											<div>
												{Object.keys(quantities).map((size) => (
													<div
														key={size}
														className={`flex justify-between items-center lg:py-[0.3vh] lg:px-[1vh] rounded-md my-[0.3vh] ${
															size === '40/50 lbs' || size === '75/85 lbs'
																? 'bg-sky-100'
																: ''
														}`}
													>
														<span className='font-medium'>{size}</span>
														<div className='flex justify-between lg:w-[10vh]'>
															<button
																type='button'
																onClick={() => handleQuantityChange(size, -1)}
																className='px-2 py-1 lg:px-[1.3vh] lg:py-[0.3vh] bg-gray-200 rounded-lg'
															>
																-
															</button>
															{/* @ts-ignore */}
															<span className='mx-2'>{quantities[size]}</span>
															<button
																type='button'
																onClick={() => handleQuantityChange(size, 1)}
																className='px-2 py-1 lg:px-[1vh] lg:py-[0.3vh] bg-gray-200 rounded-lg'
															>
																+
															</button>
														</div>
													</div>
												))}
											</div>
											<div className='mt-4'>
												<p className='text-[2vh] font-bold'>
													If fryer size {'>'} 90 lbs.
												</p>
												<div className='flex justify-between items-center mb-2 lg:mb-[1vh] mt-[2vh]'>
													<input
														type='text'
														id='fryerSize'
														name='fryerSize'
														className='border border-blue-500 border-[0.3vh] rounded-lg mr-2 p-[1vh] w-full lg:w-[25vh]'
														onChange={(e) => setAbove90Size(e.target.value)}
														value={
															above90Size.trim().length > 0 ? above90Size : ''
														}
														placeholder='Enter size'
													/>
													<div className='flex justify-between lg:w-[10vh]'>
														<button
															type='button'
															onClick={() =>
																setAbove90Count(
																	above90Count > 0 ? above90Count - 1 : 0
																)
															}
															className='px-2 py-1 lg:px-[1.3vh] lg:py-[0.3vh] bg-gray-200 rounded-lg'
														>
															-
														</button>
														<span className='mx-2'>{above90Count}</span>
														<button
															type='button'
															onClick={() => setAbove90Count(above90Count + 1)}
															className='px-2 py-1 lg:px-[1vh] lg:py-[0.3vh] bg-gray-200 rounded-lg'
														>
															+
														</button>
													</div>
												</div>
											</div>
											<div className='flex justify-end'>
												<Button
													bg='red'
													color='white'
													fontSize={'2vh'}
													_hover={{ bg: '#6E0000' }}
													onClick={() => {
														const quantitiesToAdd =
															above90Size.trim().length > 0
																? {
																		...quantities,
																		[above90Size]: above90Count,
																  }
																: quantities
														setQuantities(quantitiesToAdd)
														setFieldValue('fryersSize', quantitiesToAdd)
														handleCloseModal()
													}}
													className='text-[2vh] ml-auto'
												>
													Apply
												</Button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='flex gap-[0.5vh] md:gap-[3vh] mt-[1vh] flex-col lg:flex-row'>
								<div className='lg:w-1/2'>
									<label
										htmlFor='oilChangeAmountPW'
										className='text-sm md:text-2vh md:text-[1.7vh]'
									>
										<p className='leading-[135%] font-[700] mb-[0.5vh]  tracking-[-0.05vh]'>
											Frequency of your oil changes / week
											<br />
											<span className='text-[12] font-[400] leading-[1.7vh]'>
												(avg. per fryer, not filtering)
											</span>{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</p>
									</label>
									<Field
										as='select'
										id='oilChangeAmountPW'
										name='oilChangeAmountPW'
										className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
											errors.oilChangeAmountPW && touched.oilChangeAmountPW
												? 'border-red-500'
												: 'border-[#416CF6]'
										} ${values.oilChangeAmountPW ? 'bg-blue-100' : 'bg-white'}`}
									>
										<option value='' className='text-[1.8vh]'>
											Frequency of oil changes / week
										</option>
										<option value='none' className='text-[1.8vh]'>
											None
										</option>
										<option value='1' className='text-[1.8vh]'>
											Once per week
										</option>
										<option value='2' className='text-[1.8vh]'>
											Twice per week
										</option>
										<option value='3' className='text-[1.8vh]'>
											3 times per week
										</option>
										<option value='4' className='text-[1.8vh]'>
											4 times per week
										</option>
										<option value='Daily' className='text-[1.8vh]'>
											Daily
										</option>
										<option value='occasionally' className='text-[1.8vh]'>
											Occasionally
										</option>
									</Field>
								</div>
								<div className='lg:w-1/2 w-full self-end'>
									<label
										htmlFor='fryerOilPailBoxCost'
										className='text-sm md:text-2vh md:text-[1.7vh]'
									>
										<b>
											Your cost per pail/box of oil{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										as='select'
										id='fryerOilPailBoxCost'
										name='fryerOilPailBoxCost'
										className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border ${
											errors.fryerOilPailBoxCost && touched.fryerOilPailBoxCost
												? 'border-red-500'
												: 'border-[#416CF6]'
										} ${
											values.fryerOilPailBoxCost ? 'bg-blue-100' : 'bg-white'
										}`}
										value={
											values.fryerOilPailBoxCost === above60InputValue
												? 'my_value'
												: values.fryerOilPailBoxCost
										}
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
											const selectedValue = e.target.value
											if (selectedValue === 'above_60') {
												setFieldValue('fryerOilPailBoxCost', selectedValue)
												setIsOpenAbove60Modal(true)
											} else {
												setFieldValue('fryerOilPailBoxCost', selectedValue)
												setAbove60InputValue('')
											}
										}}
									>
										<option value='30' className='text-[1.8vh]'>
											$30
										</option>
										<option value='35' className='text-[1.8vh]'>
											$35
										</option>
										<option value='40' className='text-[1.8vh]'>
											$40
										</option>
										<option value='45' className='text-[1.8vh]'>
											$45
										</option>
										<option value='50' className='text-[1.8vh]'>
											$50
										</option>
										<option value='55' className='text-[1.8vh]'>
											$55
										</option>
										<option value='60' className='text-[1.8vh]'>
											$60
										</option>
										<option value='above_60' className='text-[1.8vh]'>
											Over $60
										</option>
										<option value='my_value' className='text-[1.8vh]' hidden>
											{above60InputValue != ''
												? `$${above60InputValue}`
												: 'Select cost per pail/box of oil'}
										</option>
									</Field>
								</div>
							</div>
							<div className='flex items-center mt-[1vh] justify-between flex-col-reverse lg:flex-row gap-[0.5vh] md:gap-[3vh]'>
								<div className='lg:self-end lg:w-1/2'>
									<Field name='isChainFranchise'>
										{({ field }: { field: any }) => (
											<div className='w-full  lg:text-start flex flex-col'>
												<p className='text-sm md:text-2vh md:text-[1.7vh] leading-[108%] font-[700] mt-[0.5vh] md:my-[1vh]'>
													Affiliated with a chain or
													<br /> Franchise Brand{' '}
													<span className='text-red-600 text-[2vh]'>*</span>
												</p>
												<div className='flex gap-[0.4vh] md:p-[0.7vh] items-center justify-center lg:justify-start'>
													<RadioGroup>
														<Stack direction='row'>
															<Radio
																{...field}
																value='true'
																border={` ${
																	errors.isChainFranchise &&
																	touched.isChainFranchise
																		? '2px solid red'
																		: '2px solid #416CF6'
																}`}
																id='isChainFranchiseYes'
															>
																<span className='text-sm md:text-[2vh]'>
																	Yes
																</span>
															</Radio>
															<Radio
																{...field}
																value='false'
																border={` ${
																	errors.isChainFranchise &&
																	touched.isChainFranchise
																		? '2px solid red'
																		: '2px solid #416CF6'
																}`}
																id='isChainFranchiseNo'
																ml='1vh'
															>
																<span className='text-sm md:text-[2vh]]'>
																	No
																</span>
															</Radio>
														</Stack>
													</RadioGroup>
												</div>
											</div>
										)}
									</Field>
								</div>
								<div className='lg:self-end w-full lg:w-1/2'>
									<label
										htmlFor='locationAmount'
										className='text-sm md:text-2vh md:text-[1.7vh] leading-[108%]'
									>
										<b>Number of locations</b>
									</label>
									<Field
										as='select'
										id='locationAmount'
										name='locationAmount'
										className={`w-full rounded-lg text-sm md:text-2vh md:text-[1.7vh] p-[0.4vh] md:p-[0.7vh] h-[3vh] md:h-[4vh] border border-[#416CF6] ${
											values.locationAmount ? 'bg-blue-100' : 'bg-white'
										}`}
										value={
											values.locationAmount === hundredAboveInputValue
												? 'my_value'
												: values.locationAmount
										}
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
											const val: string[] = [
												'Above 100',
												'11-20',
												'21-30',
												'31-50',
												'51-100',
											]
											const selectedValue = e.target.value
											if (val.includes(selectedValue)) {
												setFieldValue('locationAmount', selectedValue)
												setIsOpen100AboveModal(true)
											} else {
												setFieldValue('locationAmount', selectedValue)
												setHundredAboveInputValue('')
											}
										}}
									>
										<option value='1' className='text-[1.8vh]'>
											1
										</option>
										<option value='2' className='text-[1.8vh]'>
											2
										</option>
										<option value='3' className='text-[1.8vh]'>
											3
										</option>
										<option value='4' className='text-[1.8vh]'>
											4
										</option>
										<option value='5' className='text-[1.8vh]'>
											5
										</option>
										<option value='6' className='text-[1.8vh]'>
											6
										</option>
										<option value='7' className='text-[1.8vh]'>
											7
										</option>
										<option value='8' className='text-[1.8vh]'>
											8
										</option>
										<option value='9' className='text-[1.8vh]'>
											9
										</option>
										<option value='10' className='text-[1.8vh]'>
											10
										</option>
										<option value='11-20' className='text-[1.8vh]'>
											11-20
										</option>
										<option value='21-30' className='text-[1.8vh]'>
											21-30
										</option>
										<option value='31-50' className='text-[1.8vh]'>
											31-50
										</option>
										<option value='51-100' className='text-[1.8vh]'>
											51-100
										</option>
										<option value='Above 100' className='text-[1.8vh]'>
											Above 100
										</option>
										<option value='my_value' className='text-[1.8vh]' hidden>
											{hundredAboveInputValue != ''
												? hundredAboveInputValue
												: 'Select number of locations'}
										</option>
									</Field>
								</div>
							</div>
						</div>
						<div className='w-full lg:p-0'>
							<button
								type='submit'
								className='text-md bg-[#006A54] text-white rounded-xl w-full font-[700] py-[1vh] mt-[0.5vh] md:mt-[2vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white'
							>
								Get&nbsp;Frylow&nbsp;SAVINGS&nbsp;Estimate
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FormCA
