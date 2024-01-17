import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ query, params, json }) => {
	const obj: Record<string, string> = {};

	// e.g.-> ?country=denmark&lang=en&weather=cloudy
	query.forEach((v, k) => (obj[k] = v));

	json(200, { ...params, ...obj });
};
