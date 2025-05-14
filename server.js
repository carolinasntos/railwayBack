// server.js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("✅ API desplegada correctamente en Railway.");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});