import Image from 'next/image'
import React from 'react'
import spinner from '../public/loader-spin.png'

const Spinner = () => {
	return (
		<>
			<Image
				src={spinner}
				alt="spinner"
				className='w-[200px] m-auto relative z-10'
			/>
		</>
	)
}

export default Spinner