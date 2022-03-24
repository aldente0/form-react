function checkMinLength(value, param, validationParams, setMinLengthError) {
	value.length < validationParams[param]
		? setMinLengthError(true)
		: setMinLengthError(false);
}

export { checkMinLength };
