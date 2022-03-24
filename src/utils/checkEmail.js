const checkEmail = (email, setEmailError) => {
	var re = /\S+@\S+\.\S+/;
	re.test(email) ? setEmailError(false) : setEmailError(true);
};

export { checkEmail };
