import { useEffect, useState } from 'react';

const useInputError = (errors) => {
	const [error, setError] = useState('');

	useEffect(() => {
		if (errors.isEmpty) {
			setError('Обязательное поле ввода!');
		} else if (errors.minLengthError) {
			setError(`Минимальное кол-во символов: ${errors.minLength}`);
		} else if (errors.emailError) {
			setError('Некорректный адрес почты');
		} else if (errors.telNumberError) {
			setError('Некорректный номер телефона');
		} else {
			setError('');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		errors.isEmpty,
		errors.minLengthError,
		errors.emailError,
		errors.telNumberError,
	]);

	return error;
};

export { useInputError };
