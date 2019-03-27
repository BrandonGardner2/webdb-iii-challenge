const router = require("express").Router();

router.route("/");

router.route("/:id");

router.route("/:id/students");

module.exports = router;
