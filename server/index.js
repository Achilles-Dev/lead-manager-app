import express from "express";
import { PrismaClient } from "@prisma/client";

const EXPRESS_PORT = 3001;

const prisma = new PrismaClient();
const app = express();

app.get("/leads", async (req, res) => {
  const managers = await prisma.lead.findMany();
  res.json(managers);
});

app.post("/lead", async (req, res) => {
  const { name, email, status } = req.body;
  const manager = await prisma.lead.create({
    data: {
      name,
      email,
      status,
    },
  });
  res.json(manager);
});

const server = app.listen(EXPRESS_PORT, () =>
  console.log(`Web Server is listening on port ${EXPRESS_PORT || 3001}!`)
);
