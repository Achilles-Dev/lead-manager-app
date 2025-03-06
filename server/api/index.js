import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

const EXPRESS_PORT = 3001;

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/leads", async (req, res) => {
  const managers = await prisma.lead.findMany();
  res.json(managers);
});

app.post("/leads", async (req, res) => {
  const { name, email, status } = req.body;
  const leadManager = await prisma.lead.findUnique({
    where: {
      email: email,
    },
  });

  if (leadManager) {
    res.json("Email already exists");
  } else {
    const manager = await prisma.lead.create({
      data: {
        name,
        email,
        status,
      },
    });
    res.json(manager);
  }
});

// const server = app.listen(EXPRESS_PORT, () =>
//   console.log(`Web Server is listening on port ${EXPRESS_PORT || 3001}!`)
// );

export default app;
