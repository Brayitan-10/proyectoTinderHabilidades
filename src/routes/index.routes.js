const { Router } = require("express");
const router = Router();

// GET DE EJEMPLO localhost:3000/
router.get("/", (req, res) => {
    res.send("GET de prueba / sola ");
});

module.exports = router;
