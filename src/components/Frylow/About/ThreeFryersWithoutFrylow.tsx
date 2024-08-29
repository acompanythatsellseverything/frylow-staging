const ThreeFryersWithoutFrylow = () => {
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
						Cost/Month
					</th>
					<th className=' py-2 rounded-tr-3xl w-[19vh]'>Cost/Year</th>
				</tr>
			</thead>
			<tbody className='text-[#050920] text-sm md:text-[2vh]'>
				<tr className='bg-[#ECEFF8] text-center'>
					<td className=' py-2  border-r-2 border-blue-600 '>1</td>
					<td className=' py-2 border-r-2 border-blue-600'>4.5</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 879</td>
					<td className=' py-2'>$ 10,556</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center text-sm md:text-[2vh]'>
					<td className=' py-2 border-r-2 border-blue-600'>2</td>
					<td className=' py-2 border-r-2 border-blue-600'>9</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 1,754</td>
					<td className=' py-2'>$ 21,060</td>
				</tr>
				<tr className='bg-[#ECEFF8] text-center text-sm md:text-[2vh]'>
					<td className=' py-2 border-r-2 border-blue-600'>3</td>
					<td className=' py-2 border-r-2 border-blue-600'>13.5</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 2,633</td>
					<td className=' py-2'>$ 31,616</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center text-sm md:text-[2vh]'>
					<td className=' py-2 border-r-2 border-blue-600'>4</td>
					<td className=' py-2 border-r-2 border-blue-600'>18</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 3,507</td>
					<td className=' py-2'>$ 42,120</td>
				</tr>
				<tr className='bg-[#ECEFF8] text-center text-sm md:text-[2vh]'>
					<td className=' py-2 border-r-2 border-blue-600'>5</td>
					<td className=' py-2 border-r-2 border-blue-600'>22.5</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 4,386</td>
					<td className=' py-2'>$ 52,676</td>
				</tr>
				<tr className='bg-[#D7DEF4] text-center text-sm md:text-[2vh]'>
					<td className=' py-2 border-r-2 border-blue-600 rounded-bl-3xl'>6</td>
					<td className=' py-2 border-r-2 border-blue-600'>27</td>
					<td className=' py-2 border-r-2 border-blue-600'>$ 5,261</td>
					<td className=' py-2 rounded-br-3xl'>$ 63,180</td>
				</tr>
			</tbody>
		</table>
	)
}

export default ThreeFryersWithoutFrylow
