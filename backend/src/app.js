import express from "express";
import router from "./modules/index.module.js";
import errorHandler from "./middlewares/errorHandler.module.js";
import cors from "cors";
import healthCheckRouter from "./modules/healthCheck.module.js";

const app = express();
const PORT = 5090;

app.use(cors());
app.use(express.json());
app.use("/health-check", healthCheckRouter);
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`${PORT} 실행됨!`);
});
