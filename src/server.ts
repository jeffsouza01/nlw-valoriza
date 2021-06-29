import "reflect-metadata";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import "./database";

import { router } from "./routes/routes";
import swaggerDocs from "./utils/swagger.json";

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3333, () => console.log("Server is Running!"));
