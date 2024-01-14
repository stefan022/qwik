import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
	const text = useSignal<string>("Click me");

	// Because event handling is asynchronous, you can't use event.currentTarget.
	// To solve this Qwik handlers provide a currentTarget as a second argument.
	const printMessage = $((event: MouseEvent, currentTarget: Element) =>
		console.log("CLICKED!", event, currentTarget)
	);

	const printSmile = $(() => console.log("xd"));

	return (
		<button preventdefault:click onClick$={[printMessage, printSmile]}>
			{text}
		</button>
	);
});
