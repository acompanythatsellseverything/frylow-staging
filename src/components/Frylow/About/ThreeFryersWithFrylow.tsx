const ThreeFryersWithFrylow = () => {
	return (
		<table className='min-w-full bg-white'>
			<thead className='text-center align-center'>
				<tr className='border-b-2  border-blue-600 bg-[#CAD5F8] text-[#000F3D] text-center text-sm md:text-[2vh]'>
					<th className=' py-2 border-r-2 border-blue-600 rounded-tl-3xl w-[19vh]'>
						# of Fryers
					</th>
					<th className=' py-2 border-r-2 border-blue-600 w-[19vh]'>
						Boxes of Oil/WK
					</th>
					<th className=' py-2 border-r-2 border-blue-600 w-[19vh]'>
						<span className='text-green-500'>SAVINGS</span>/Month
					</th>
					<th className=' py-2 rounded-tr-3xl w-[19vh]'>
						<span className='text-green-500'>SAVINGS</span>/Year
					</th>
				</tr>
			</thead>
			<tbody className='text-[#050920] text-sm md:text-[2vh]'>
				<tr className='bg-[#ECEFF8] text-center'>
					<td className=' py-2  border-r-2 border-blue-600 '>1</td>
					<td className=' py-2 border-r-2 border-blue-600'>2.25</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 437</td>
					<td className=' py-2'>$ 5,252</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center'>
					<td className=' py-2 border-r-2 border-blue-600'>2</td>
					<td className=' py-2 border-r-2 border-blue-600'>4.5</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 879</td>
					<td className=' py-2'>$ 10,556</td>
				</tr>
				<tr className='bg-[#ECEFF8] text-center'>
					<td className=' py-2 border-r-2 border-blue-600'>3</td>
					<td className=' py-2 border-r-2 border-blue-600'>6.75</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 1,316</td>
					<td className=' py-2'>$ 15,808</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center'>
					<td className=' py-2 border-r-2 border-blue-600'>4</td>
					<td className=' py-2 border-r-2 border-blue-600'>9</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 1,754</td>
					<td className=' py-2'>$ 21,060</td>
				</tr>
				<tr className='bg-[#ECEFF8] text-center'>
					<td className=' py-2 border-r-2 border-blue-600'>5</td>
					<td className=' py-2 border-r-2 border-blue-600'>11.25</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 2,191</td>
					<td className=' py-2'>$ 26,312</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center'>
					<td className=' py-2 border-r-2 border-blue-600 rounded-bl-3xl'>6</td>
					<td className=' py-2 border-r-2 border-blue-600'>13.5</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 2,633</td>
					<td className=' py-2 rounded-br-3xl'>$ 31,616</td>
				</tr>
			</tbody>
		</table>
	)
}
export default ThreeFryersWithFrylow
