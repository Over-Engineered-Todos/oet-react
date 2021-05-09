import {
	Box,
	Alert,
	AlertIcon,
	VStack,
	HStack,
	Text,
	ButtonGroup,
	Button,
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
} from '@chakra-ui/react';
import useTodos from '../../hooks/use-todos';

function List() {
	const { todos, update, remove } = useTodos();

	const markDone = (id) => {
		update(id, true);
	};

	const markTooo = (id) => {
		update(id, false);
	};

	const deleteTodo = (id) => {
		remove(id);
	};

	if (todos.length === 0) {
		return (
			<Box padding='4' marginTop='4' marginBottom='4' maxW='xl' margin='0 auto'>
				<Alert status='warning'>
					<AlertIcon />
					No Tasks Found
				</Alert>
			</Box>
		);
	}

	console.log(todos);

	return (
		<Box maxW='xl' margin='0 auto'>
			<Tabs>
				<TabList>
					<Tab>All</Tab>
					<Tab>Done</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<VStack spacing='4'>
							{todos
								.filter((t) => t.completed === false)
								.map((t) => {
									return (
										<Box
											spacing='4'
											padding='4'
											borderWidth='1px'
											key={t.id}
											width='100%'
											borderRadius='5'
										>
											<HStack spacing='4' justify='space-between'>
												<Text>{t.task}</Text>
												<ButtonGroup>
													<Button
														variant='solid'
														colorScheme='green'
														onClick={() => markDone(t.id)}
													>
														Mark as Done
													</Button>
													<Button
														variant='solid'
														colorScheme='red'
														onClick={() => deleteTodo(t.id)}
													>
														Delete
													</Button>
												</ButtonGroup>
											</HStack>
										</Box>
									);
								})}
						</VStack>
					</TabPanel>
					<TabPanel>
						{todos
							.filter((t) => t.completed === true)
							.map((t) => {
								return (
									<Box
										spacing='4'
										padding='4'
										borderWidth='1px'
										key={t.id}
										width='100%'
										borderRadius='5'
									>
										<HStack spacing='4' justify='space-between'>
											<Text>{t.task}</Text>
											<ButtonGroup>
												<Button
													variant='solid'
													colorScheme='green'
													onClick={() => markTooo(t.id)}
												>
													Mark as Todo
												</Button>
												<Button
													variant='solid'
													colorScheme='red'
													onClick={() => deleteTodo(t.id)}
												>
													Delete
												</Button>
											</ButtonGroup>
										</HStack>
									</Box>
								);
							})}
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

export default List;
