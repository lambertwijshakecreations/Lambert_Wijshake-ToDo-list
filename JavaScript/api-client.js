const host = "http://localhost:3000/";

const getTodos = async function () {
	try {
		const res = await fetch(host, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const postTodo = async function (todo) {
	try {
		const res = await fetch(host, {
			method: "POST",
			body: JSON.stringify(todo),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const deleteTodo = async (id) => {
	try {
		await fetch(host + id, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
	} catch (err) {
		console.log(err);
	}
};
