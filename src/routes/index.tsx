import { component$, useResource$, useStore } from "@builder.io/qwik";
import { Button, Counter, Title, User } from "~/components";
import type { IUser } from "~/typescript/interfaces/IUser";

export default component$(() => {
	const user = useStore<IUser>({
		id: 1,
		username: "stefan022",
		profession: "FrontEnd developer",
		framework: "Qwik",
	});

	useResource$(() => {
		/*
			Use useResource$() to create a computed value that is derived asynchronously. It's 
			the asynchronous version of useComputed$(), which includes the state of the 
			resource (loading, resolved, rejected) on top of the value.

			A common use case for useResource$() is to fetch data from an external API within 
			the component itself, this means that the execution might happen in the server or 
			the client.
		*/
	});

	return (
		<>
			<Title title="Welcome to the Home page! :D" />
			<Button />
			<User user={user} />
			<Counter />
		</>
	);
});
