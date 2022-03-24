const checkTel = (tel, setTelError) => {
	var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
	re.test(tel) ? setTelError(false) : setTelError(true);
};

export { checkTel };
