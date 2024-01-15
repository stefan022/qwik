import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div>
			<div>
				<p>Docs 1</p>
				<Link href="/docs/1">View details</Link>
			</div>
			<div>
				<p>Docs 2</p>
				<Link href="/docs/2">View details</Link>
			</div>
			<div>
				<p>Docs 3</p>
				<Link href="/docs/3">View details</Link>
			</div>
		</div>
	);
});
