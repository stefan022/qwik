import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { Button, Counter, Title, User } from "~/components";
import { ctx } from "~/context/ctx";
import type { IUser } from "~/typescript/interfaces/IUser";
import type { Theme } from "~/typescript/types/Theme";

export default component$(() => {
	const theme = useStore<{ theme: Theme }>({ theme: "dark" });

	const user = useStore<IUser>({
		id: 1,
		username: "stefan022",
		profession: "FrontEnd developer",
		framework: "Qwik",
	});

	useContextProvider(ctx, theme);

	return (
		<>
			<Title title="Welcome to the Home page! :D" />
			<Button />
			<User user={user} />
			<Counter />
		</>
	);
});
