import express from "express";
import cors from "cors";
import { routes } from "./routes";
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 100000,
  })
);
app.use(routes);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Servidor rodando na porta ${port || 3333}`);
});
