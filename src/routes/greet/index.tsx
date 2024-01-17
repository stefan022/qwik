import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ url, method, cookie, json }) => {
	cookie.set("Qwik.cookie", "XyZ9qW1kOa");

	const qwik_cookie = cookie.get("Qwik.cookie");

	json(200, {
		url: url.toString(),
		method,
		greet: "hello qwik!1 xd",
		qwik_cookie,
	});
};
