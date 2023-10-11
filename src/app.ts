import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";
import { commentRouter, sessionRouter, userRouter } from "./routers";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
// app.use("/announcements");
app.use("/comments", commentRouter);

app.use(middlewares.handleError);

export default app;
