import {
	Box,
	VStack,
	FormControl,
	Button,
	ButtonGroup,
} from '@chakra-ui/react';
import { TextInput } from '../text-input';
import { Form as FormikForm, Formik } from 'formik';
import { INITIAL_VALUES } from './constants';
import validate from './validate';
import useTodos from '../../hooks/use-todos';
import generateId from '../../utils/generateId';

function Form() {
	const { add } = useTodos();

	const onSubmit = (values, actions) => {
		const task = {
			id: generateId(),
			task: values.task,
			completed: false,
		};
		add(task);
		actions.resetForm();
		console.log(task);
	};

	return (
		<Box padding='4' marginTop='4' marginBottom='4' maxW='xl' margin='0 auto'>
			<Formik
				validate={validate}
				onSubmit={onSubmit}
				initialValues={INITIAL_VALUES}
			>
				{({ errors, resetForm }) => {
					const disabled = Object.keys(errors).length > 0;
					return (
						<FormikForm>
							<VStack>
								<TextInput name='task' label='Task' placeholder='' />
								<FormControl>
									<ButtonGroup spacing='4'>
										<Button type='submit' disabled={disabled}>
											Add
										</Button>
										<Button onClick={resetForm}>Clear</Button>
									</ButtonGroup>
								</FormControl>
							</VStack>
						</FormikForm>
					);
				}}
			</Formik>
		</Box>
	);
}

export default Form;
