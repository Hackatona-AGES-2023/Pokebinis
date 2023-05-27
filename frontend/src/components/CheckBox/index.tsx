import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import './index.scss'

export interface CheckBoxProps 
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
		label: string
	}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	return <div className='wrapper'>
		<input {...props} className='checkbox-container' type='checkbox'></input>
		<p className='label'>{props.label}</p>
	</div>
		

}

export default CheckBox
