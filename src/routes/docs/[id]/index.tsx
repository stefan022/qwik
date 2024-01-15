import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
	const location = useLocation();

	return (
		<div>
			<p>Here are the details about the docs: {location.params.id}</p>
		</div>
	);
});
