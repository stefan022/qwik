import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Refresh } from "~/components";

export const useServerTime = routeLoader$(() => {
	return new Date().toLocaleString();
});

export default component$(() => {
	const location = useLocation();
	const serverTime = useServerTime();

	return (
		<div>
			<p>Here are the details about the docs: {location.params.id}</p>
			<Refresh />
			<p>Server time: {serverTime.value}</p>
		</div>
	);
});
