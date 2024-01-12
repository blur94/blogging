import {
	BackgroundImage,
	Box,
	Button,
	Card,
	Center,
	Group,
	Text,
	TextInput,
	Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/router';
import { ContactType, contactSchema, contactValues } from '../../utils/form/contact';
import { label } from '../../utils/label';
import Deadpool from '/assets/jedi.jpg';

export default function ContactUs() {
	const { back } = useRouter();

	const form = useForm<ContactType>({
		initialValues: contactValues,
		validate: zodResolver(contactSchema),
	});

	const handleSubmit = (values: ContactType) => console.log(values);

	return (
		<Box w="100vw" bg="#faf8ff" className="flex h-screen items-center justify-center">
			<Card
				shadow="xl"
				// p={20}
				component="form"
				w="50%"
				onSubmit={form.onSubmit((e) => handleSubmit(e))}
			>
				<Card.Section mb={20}>
					{/* <Image src={Deadpool.src} alt="Deadpool" w="100%" h={50} /> */}
					<BackgroundImage src={Deadpool.src} bgp={'0 70'} h={70}>
						<Center h="100%">
							<Text fz={20} fw={700}>
								Contact Us
							</Text>
						</Center>
					</BackgroundImage>
				</Card.Section>

				<TextInput
					label={label('Full Name', true)}
					placeholder="Enter your full name"
					size="md"
					mb="md"
					{...form.getInputProps('fullName')}
				/>

				<TextInput
					label={label('Email', true)}
					placeholder="Enter your email"
					size="md"
					mb="md"
					{...form.getInputProps('email')}
				/>

				<TextInput
					label={label('Subject', true)}
					placeholder="Enter email subject..."
					size="md"
					mb="md"
					{...form.getInputProps('subject')}
				/>

				<Textarea
					label={label('Message', true)}
					placeholder="Enter your message"
					size="md"
					mb="md"
					{...form.getInputProps('message')}
				/>

				<Group justify="space-between" mt={30}>
					<Button variant="outline" size="xs" onClick={back}>
						Cancel
					</Button>

					<Button type="submit" bg="blue" size="xs" color="teal" variant="filled">
						Submit
					</Button>
				</Group>
			</Card>
		</Box>
	);
}
