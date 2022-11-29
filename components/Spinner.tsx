import Image from 'next/image'
import React from 'react'
import spinner from '../public/loader-spin.gif'

const Spinner = () => {
	return (
		<div className='h-[90vh] flex items-center justify-center'>
			<Image
				src={spinner}
				alt="spinner"
				className='w-[200px] m-auto relative z-10'
			/>
		</div>
	)
}

export default Spinner