import { component$, useStore } from "@builder.io/qwik";
import { Button, Title, User } from "~/components";
import type { IUser } from "~/typescript/interfaces/IUser";

export default component$(() => {
	const user = useStore<IUser>({
		id: 1,
		username: "stefan022",
		profession: "FrontEnd developer",
		framework: "Qwik",
	});

	return (
		<>
			<Title title="Welcome to the Home page! :D" />
			<Button />
			<User user={user} />
		</>
	);
});
