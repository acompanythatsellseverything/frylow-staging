import { Field, useField } from 'formik';
import React from 'react';

const PhoneInputField: React.FC<any> = ({
											errors,
											touched,
											wrapperClasses = 'lg:w-1/2',
											showValidationErrors = false,
										}) => {
	const [field, , helpers] = useField('phone');

	const formatPhoneNumber = (value: string) => {
		// Удаляем все нецифровые символы
		const cleaned = value.replace(/\D/g, '').slice(0, 10); // Ограничиваем до 10 цифр
		// Применяем форматирование XXX-XXX-XXXX
		const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

		if (match) {
			let formatted = '';
			if (match[1]) formatted = match[1];
			if (match[2]) formatted += '-' + match[2];
			if (match[3]) formatted += '-' + match[3];
			return formatted;
		}

		return cleaned;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		const formattedInput = formatPhoneNumber(input);
		helpers.setValue(formattedInput);
	};

	return (
		<div className={wrapperClasses}>
			<label htmlFor="phone" className="text-xs md:text-2vh md:text-[1.7vh]">
				<b>
					Mobile Phone <span className="text-red-600 text-[2vh]">*</span>
				</b>
			</label>
			<Field
				type="tel"
				placeholder="___-___-____"

				id="phone"
				name="phone"
				value={field.value}
				onChange={handleInputChange}
				className={`w-full rounded-lg text-xs md:text-[1.7vh] p-[1vh] h-[3vh] md:h-[4vh] border placeholder-black ${
					errors.phone && touched.phone ? 'border-red-500' : 'border-[#416CF6]'
				} ${field.value.length > 0 ? 'bg-blue-100' : 'bg-white'}`}
			/>
			{showValidationErrors && errors.phone && touched.phone && (
				<div className="text-red-500 text-xs">{errors.phone}</div>
			)}
		</div>
	);
};

export default PhoneInputField;
