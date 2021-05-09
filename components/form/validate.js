const validate = (values) => {
	const errors = {};

	if (!values.task) {
		errors.task = 'Required';
	}

	return errors;
};

export default validate;
