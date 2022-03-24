import { useState } from 'react';
import { useValidation } from './useValidation';

const useInput = (initialValue, validationsParams) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const valid = useValidation(value, validationsParams);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleBlur = (e) => {
		setIsDirty(true);
	};

	if (!validationsParams.isEmpty) {
		return {
			setValue,
			handleChange,
			value,
		};
	}

	return {
		setIsDirty,
		setValue,
		handleBlur,
		handleChange,
		value,
		isDirty,
		...valid,
	};
};

export { useInput };
