import express from "express";
import env from "dotenv";
import cors from "cors";

import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const port = process.env.PORT || 8080;

env.config();

app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server Start: http://localhost:${port}`);
});
