import { useState, useEffect } from 'react';

import {
	checkOnEmpty,
	checkMinLength,
	checkEmail,
	checkTel,
} from '../utils/utils';
import { useInputError } from './useInputError';

const useValidation = (value, validationParams) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [telNumberError, setTelError] = useState(false);
	const error = useInputError({
		isEmpty,
		minLengthError,
		emailError,
		telNumberError,
		minLength: validationParams.minLength,
	});

	useEffect(() => {
		for (const param in validationParams) {
			switch (param) {
				case 'isEmpty':
					checkOnEmpty(value, setIsEmpty);
					break;
				case 'minLength':
					checkMinLength(
						value,
						param,
						validationParams,
						setMinLengthError
					);
					break;
				case 'isEmailError':
					checkEmail(value, setEmailError);
					break;
				case 'telNumberError':
					checkTel(value, setTelError);
					break;
				default:
					break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return {
		isEmpty,
		minLengthError,
		error,
	};
};

export { useValidation };
