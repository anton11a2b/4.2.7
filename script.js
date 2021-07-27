const url = "https://conduit.productionready.io/api/";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkwODEzLCJ1c2VybmFtZSI6ImFidWFidSIsImV4cCI6MTYzMjUwOTYzMX0.fxVhXgzhXHnLkJM9q18QVWIBTi7DM8DR_hzoVTriaC8";

const regObj = {
	"user":{
    "username": "abuabu",
    "email": "abuabu@jake.jake",
    "password": "abuabuabuabu"
  }
}

const authObj = {
	"user":{
    "email": "abuabu@jake.jake",
    "password": "abuabuabuabu"
  }
}

async function registration() {
	const response  = await fetch(url + "users", {
		method: "post",
		headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(regObj),
	})

	const data = await response .json();
}

async function authentication() {
	const response  = await fetch(url + "users/login", {
		method: "post",
		headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(authObj),
	})

	const data = await response .json();
}

async function authorization() {
	const response = await fetch(url + "user?secret=42", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Token ${token}`
    },
  })
	const data = await response.text();
  document.write(data)
}

authorization();
