import { Formik, Form, Field } from 'formik'
import { useState, useCallback } from 'react'
import PhoneInputField from '../Landing/Form/PhoneInputField'
import { getApiUrl } from '../../../helpers.tsx'
import {
	useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { Spinner } from '@chakra-ui/react'
//declare type for form state object
type FormValues = {
	firstName: string
	lastName: string
	email: string
	stateOrProvince: string
	city: string
	phone: string
	subject: string
	message: string
}

const ContactUsForm = () => {
	const [isSubmitModal, setIsSubmitModal] = useState(false)
	const [recaptchaFailed, setRecaptchaFailed] = useState(false)
	const [formSending, setFormSending] = useState(false)
	const { executeRecaptcha } = useGoogleReCaptcha();

	// Create an event handler so you can call the verification on button click event or form submit
	const handleReCaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			console.log('Execute recaptcha not yet available');
			return;
		}

		return  await executeRecaptcha('CONTACT_US');
	}, [executeRecaptcha]);

	const handleSubmit = async (values: FormValues, { setErrors, resetForm }: any) => {
		try {
			setFormSending(true)
			const token = await handleReCaptchaVerify();
			const response = await fetch(getApiUrl('/contact-us'), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({...values, ...{recaptchaToken: token}}),
			})
			const data = await response.json()

			if (data.success) {
				setIsSubmitModal(true)
				// Reset errors and form
				setErrors({})
				resetForm()
				setRecaptchaFailed(false)
			} else {
				if (data.data) {
					const validationErrors = {};
					const fields = Object.keys(data.data);
					fields.forEach((field) => {
						if (field === 'recaptchaToken') return;
						// @ts-ignore
						validationErrors[field] = Object.values(data.data[field]).join(', ');
					});

					setErrors(validationErrors)

					if(data.data.hasOwnProperty('recaptchaToken')) {
						setRecaptchaFailed(true)
					} else {
						setRecaptchaFailed(false)
					}
				} else {
					alert('Something went wrong. Please try again later.')
					console.error('Error:', data)
				}
			}


		} catch (error) {
			console.error('Error:', error)
			alert('Something went wrong. Please try again later.')
		}
		setFormSending(false)

	}

	const handleSuccessModalClosed = () => {
		setIsSubmitModal(false)
	}

	return (
		<div className='bg-[#EDF0F9] md:bg-[#fff] flex flex-col flex-1 justify-center w-full relative'>
			{isSubmitModal && (
				<div className='absolute z-10 flex justify-center w-full top-[20%]'>
					<div
						className='bg-white relative p-4 rounded-xl border-blue-500 border-2 flex flex-col items-center justify-evenly lg:p-[8vh] z-10'>
						<p
							className='absolute top-[0.4vh] right-[2vh] text-xl cursor-pointer'
							onClick={() => handleSuccessModalClosed()}
						>
							✕
						</p>
						<p className='text-black text-[4vh] font-bold'>Success!</p>
						<p className='lg:text-[3vh] text-lg text-center font-medium mt-4'>
							Your <span className='text-blue-500'>message </span>
							has been sent!
						</p>
					</div>
				</div>
			)}

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					stateOrProvince: '',
					city: '',
					phone: '',
					subject: '',
					message: '',
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
					if (!values.stateOrProvince) {
						errors.stateOrProvince = 'Required'
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
					if (!values.city) {
						errors.city = 'Required'
					}
					if (!values.message) {
						errors.message = 'Required'
					}
					return errors
				}}
			>
				{({ errors, touched }) => (
					<Form className='flex flex-col flex-1'>
						<div className='bg-[#EDF0F9] p-[1vh] lg:p-[3vh] pt-3 rounded-xl flex flex-col flex-1 justify-between w-full relative'>
							<div className='flex gap-[1vh] md:gap-[3vh] mb-[1vh] flex-row'>
								<div className='w-1/2 lg:space-y-1'>

									<label
										htmlFor='firstName'
										className='text-xs md:text-[1.7vh]'
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
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.firstName && touched.firstName
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.firstName && touched.firstName && (
										<div className="text-red-500 text-xs">
											{errors.firstName}
										</div>
									)}
								</div>
								<div className='w-1/2 lg:space-y-1'>
									<label
										htmlFor='lastName'
										className='text-xs md:text-[1.7vh]'
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
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.lastName && touched.lastName
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.lastName && touched.lastName && (
										<div className="text-red-500 text-xs">
											{errors.lastName}
										</div>
									)}
								</div>
							</div>
							<div className='flex gap-[1vh] md:gap-[3vh] mb-[1vh] flex-row'>
								<div className='w-1/2 space-y-1'>
									<label
										htmlFor='email'
										className='text-xs md:text-[1.7vh]'
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
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.email && touched.email
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.email && touched.email && (
										<div className="text-red-500 text-xs">
											{errors.email}
										</div>
									)}
								</div>
								<div className='w-1/2 space-y-1'>
									<label
										htmlFor='stateOrProvince'
										className='text-xs md:text-[1.7vh]'
									>
										<b >
											State/Province{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										type='text'
										id='stateOrProvince'
										name='stateOrProvince'
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.stateOrProvince && touched.stateOrProvince
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.stateOrProvince && touched.stateOrProvince && (
										<div className="text-red-500 text-xs">
											{errors.stateOrProvince}
										</div>
									)}
								</div>
							</div>
							<div className='flex gap-[1vh] md:gap-[3vh] mb-[1vh] flex-row'>
								<div className='w-1/2 lg:w-1/3 space-y-1'>
									<label htmlFor='city' className='text-xs md:text-[1.7vh]'>
										<b>
											City <span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										type='text'
										id='city'
										name='city'
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.city && touched.city
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.city && touched.city && (
										<div className="text-red-500 text-xs">
											{errors.city}
										</div>
									)}
								</div>

								<PhoneInputField
									errors={errors}
									touched={touched}
									wrapperClasses={'w-1/2 lg:w-1/3 space-y-1'}
									showValidationErrors={true}
								/>

								<div className='w-100 lg:w-1/3 space-y-1'>
									<label
										htmlFor='subject'
										className='text-xs md:text-[1.7vh]'
									>
										<b >Subject </b>
									</label>
									<Field
										type='text'
										id='subject'
										name='subject'
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[3vh] md:h-[4vh] border ${
											errors.subject && touched.subject
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.subject && touched.subject && (
										<div className="text-red-500 text-xs">
											{errors.subject}
										</div>
									)}
								</div>
							</div>
							<div className='mt-1 lg:mt-4'>
								<div className='lg:w-100 w-100 space-y-1'>
									<label
										htmlFor='message'
										className='text-xs md:text-[1.7vh]'
									>
										<b >
											Comments{' '}
											<span className='text-red-600 text-[2vh]'>*</span>
										</b>
									</label>
									<Field
										as='textarea'
										id='message'
										name='message'
										className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[0.4vh] h-[16vh] md:h-[16vh] border align-top p-2 ${
											errors.message && touched.message
												? 'border-red-500'
												: 'border-[#416CF6]'
										}`}
									/>
									{errors.message && touched.message &&(
										<div className="text-red-500 text-xs">
											{errors.message}
										</div>
									)}
								</div>
							</div>
							{recaptchaFailed && (
								<div className="text-red-500 text-xs mt-2">
									Recaptcha verification failed. Please try again.
								</div>
							)}
						</div>

						<div className='w-full lg:p-0 flex justify-center'>
							<button
								type='submit'
								className='text-md bg-[#006A54] text-white rounded-xl w-full font-[700] py-[1vh] lg:w-[50%] mt-2 md:mt-[2vh] lg:text-[3vh] hover:text-[#006A54] border transition-all border-[#006A54] hover:bg-white flex items-center justify-center'
							>

								Send Message {formSending && <Spinner size='md' className={'ml-2'}/>}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ContactUsForm
