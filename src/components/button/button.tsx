import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
	const text = useSignal<string>("Click me");

	const printMessage = $(() => console.log("CLICKED!"));
	const printSmile = $(() => console.log("xd"));

	return (
		<button preventdefault:click onClick$={[printMessage, printSmile]}>
			{text}
		</button>
	);
});
