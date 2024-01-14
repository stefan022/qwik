import { component$ } from "@builder.io/qwik";

interface IProps {
	title: string;
}

export default component$<IProps>(({ title }) => {
	return <div>{title}</div>;
});
