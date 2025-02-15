import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const JsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route Handler for /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// create user handler
const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    console.log(body, "body");
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

//Route Handler for GET user by id
const getUSerByIdHandler = (req, res) => {
  const id = parseInt(req.url.split("/")[3]);
  console.log("im here", id); 

  const user = users.find((user) => user.id === parseInt(id));
  if (user) { 
    console.log("im here", user);
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.write(JSON.stringify({ message: "User not found" }));
    res.end();
  }
};

const notFoundHandler = (req, res) => {
  res.write(JSON.stringify({ message: "Route not found" }));
  res.statusCode = 404;
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    JsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUSerByIdHandler(req, res);
      } else if (req.method === "POST" && req.url === "/api/users") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`server running on prot ${PORT}`);
});
