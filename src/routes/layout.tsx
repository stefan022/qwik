import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import { Header, Footer } from "~/components";
import Container from "~/container/container";

import styles from "./styles.css?inline";

export default component$(() => {
	useStyles$(styles);

	return (
		<Container>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</Container>
	);
});
