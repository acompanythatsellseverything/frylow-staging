import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/react'
import React from 'react'

const addCommas = (num: string) =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const removeNonNumeric = (num: string) => num.toString().replace(/[^0-9]/g, '')

const Above60Modal: React.FC<any> = ({
	isOpen,
	setIsOpen,
	value,
	setValue,
	setFieldValue,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
			<ModalOverlay />
			<ModalContent border='2px solid blue' borderRadius='3vh'>
				<ModalHeader textAlign='center'>
					Your cost per pail/box of oil
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<input
						type='text'
						value={value}
						onChange={(e) =>
							setValue(addCommas(removeNonNumeric(e.target.value)))
						}
						className='w-full rounded text-[1.7vh] p-1 h-[4vh] border rounded-lg border-[#416CF6] border-[0.2vh] py-[3vh] p-[1vh] text-[2vh] font-[500]'
						placeholder='Enter cost per pail/box of oil'
					/>
				</ModalBody>
				<ModalFooter>
					<button
						className='bg-red-500 text-white rounded px-[2vh] py-[1vh]'
						onClick={() => {
							setFieldValue('fryerOilPailBoxCost', value)
							setIsOpen(false)
						}}
					>
						Apply
					</button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default Above60Modal
