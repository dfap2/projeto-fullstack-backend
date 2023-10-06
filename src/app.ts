import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";

const app = express();

app.use(express.json());

// app.use("/users");
// app.use("/login");
// app.use("/announcements");
// app.use("/comments");

app.use(middlewares.handleError);

export default app;
