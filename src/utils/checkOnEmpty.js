function checkOnEmpty(value, setIsEmpty) {
	value ? setIsEmpty(false) : setIsEmpty(true);
}

export { checkOnEmpty };
