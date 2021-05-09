import {
  Box,
  VStack,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function Form() {
  return (
    <Box padding="4" marginTop="4" marginBottom="4" maxW="xl" margin="0 auto">
      <VStack>
        <FormControl>
          <FormLabel>Task</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <Button>Add</Button>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default Form;
