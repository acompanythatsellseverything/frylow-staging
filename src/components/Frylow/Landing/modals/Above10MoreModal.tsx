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

const Above10MoreModal: React.FC<any> = ({
	isOpen,
	setIsOpen,
	value,
	setValue,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
			<ModalOverlay />
			<ModalContent border='2px solid blue' borderRadius='3vh'>
				<ModalHeader textAlign='center'>
					Total # of fryers <br />
					<i>(if more than one location)</i>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<input
						type='text'
						value={value}
						onChange={(e) =>
							setValue(addCommas(removeNonNumeric(e.target.value)))
						}
						className='w-full rounded text-[1.7vh] p-1 h-[4vh] rounded-lg border border-[#416CF6] border-[0.2vh] py-[3vh] p-[1vh] text-[2vh] font-[500]'
						placeholder='Enter total # of fryers (if more than one location)'
					/>
				</ModalBody>
				<ModalFooter>
					<button
						className='bg-red-500 text-white rounded px-[2vh] py-[1vh]'
						onClick={() => {
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

export default Above10MoreModal
