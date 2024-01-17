import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
	url,
	basePathname: base_pathname,
	method,
	cookie,
	json,
}) => {
	cookie.set("Qwik.cookie", "XyZ9qW1kOa");

	const qwik_cookie = cookie.get("Qwik.cookie");

	json(200, {
		url: url.toString(),
		base_pathname,
		method,
		greet: "hello qwik!1 xd",
		qwik_cookie,
	});
};
