import { component$ } from "@builder.io/qwik";
import { Button, Title } from "~/components";

export default component$(() => {
	return (
		<>
			<Title title="Welcome to the Home page! :D" />
			<Button />
		</>
	);
});
