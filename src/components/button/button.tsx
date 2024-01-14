import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
	const text = useSignal<string>("Click me");

	return <button>{text}</button>;
});
