import React, { useEffect, useRef } from 'react'
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
} from '@chakra-ui/react'

const OilPurchaseDrawer: React.FC<any> = ({
	isOpen,
	onClose,
	selectedNumber,
	setSelectedNumber,
}) => {
	const initialFocusRef = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		if (isOpen && initialFocusRef.current) {
			initialFocusRef.current.focus()
		}
	}, [isOpen])
	return (
		<Drawer
			isOpen={isOpen}
			placement='right'
			onClose={onClose}
			initialFocusRef={initialFocusRef}
		>
			<DrawerOverlay />
			<DrawerContent className=' rounded-lg' h='430px'>
				<DrawerHeader fontSize={['18px', '2vh']}>
					Actual number of pails/boxes of oil used per week
				</DrawerHeader>
				<DrawerBody>
					<label
						htmlFor='select-number'
						className='mb-2 text-xl lg:text-[2vh] font-[600]'
					>
						Number of pails/boxes per week{' '}
						<span className='text-[red] text-xl lg:text-[2.5vh] font-[600]'>
							*
						</span>
					</label>
					<br />
					<select
						id='select-number'
						className='p-2 rounded-lg border border-gray-300 text-[#8091BE] font-[600] max-w-[30vh] w-full mt-[1vh] text-lg lg:text-[2vh]'
						onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
						value={selectedNumber}
					>
						<option hidden value=''>
							Select number
						</option>
						{[...Array(10).keys()].map((num) => (
							<option key={num + 1} value={num + 1}>
								{num + 1}
							</option>
						))}
					</select>
					<br />
					<br />
					<div>
						<label
							htmlFor='other-number'
							className='text-lg lg:text-[2vh] font-[600]'
						>
							<i className='text-blue-600'>If more than 10</i>
						</label>
						<br />
						<input
							type='number'
							id='other-number'
							className='p-2 rounded-lg border border-gray-300 text-[#8091BE] font-[600] max-w-[30vh] w-full mt-[1vh] text-lg lg:text-[2vh]'
							placeholder='Enter other number'
							onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
							value={selectedNumber}
						/>
					</div>
				</DrawerBody>
				<DrawerFooter className='text-[2vh]'>
					<Button
						ref={initialFocusRef}
						bg='red'
						color='white'
						fontSize={['18px', '2vh']}
						_hover={{ bg: '#6E0000' }}
						mr={3}
						onClick={onClose}
						className='text-lg lg:text-[2vh]'
					>
						Apply
					</Button>
					<Button
						variant='outline'
						mr={3}
						onClick={onClose}
						className='text-lg lg:text-[2vh]'
						fontSize={['18px', '2vh']}
					>
						Close
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default OilPurchaseDrawer
