const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

const EXPRESS_PORT = 3001;

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

// Handle local development vs Vercel deployment
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(EXPRESS_PORT, () =>
    console.log(
      `Web Server is listening on http://localhost:${EXPRESS_PORT || 3001}`
    )
  );
}

// Export the app for Vercel
module.exports = app;
