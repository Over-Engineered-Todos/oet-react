import React from 'react';
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { Field, getIn } from 'formik';

const Text = ({ name, label, placeholder = '', onChange }) => {
	return (
		<Field name={name}>
			{({ field, form }) => {
				const errors = getIn(form.errors, name);
				const touched = getIn(form.touched, name);

				return (
					<FormControl isInvalid={!!errors && !!touched}>
						<FormLabel htmlFor={name}>{label}</FormLabel>
						<Input
							{...field}
							id={name}
							type='text'
							placeholder={placeholder}
							onChange={
								onChange
									? (e) => {
											onChange(e.target.value);
									  }
									: field.onChange
							}
						/>
						<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					</FormControl>
				);
			}}
		</Field>
	);
};

export default Text;
