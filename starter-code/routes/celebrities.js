const express = require("express");
const router = express.Router();
const celebrityModel = require("../models/celebrity");

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then((dbRes) => {
        console.log(dbRes);
        
      res.render("celebrities/index", {
        celebrities: dbRes,
      });
    })
    .catch(next);
});

router.get("/celebrities/:id", async (req, res, next) => {
    try {
        res.render("celebrities/show", {celebrity: await celebrityModel.findById(req.params.id) });
    }
    catch (err) {
        next(err);
    }
});

router.get("/new", (req, res) => {
    res.render("celebrities/new");
  });


router.post("/new", async (req, res, next) => {
    const newCelebrity = req.body
    try {
        await celebrityModel.create(newCelebrity);
        res.redirect ("/celebrities")
    } catch(err) {
        next(err);
    }
});

router.get("/celebrities/delete/:id", async (req, res, next) => {
    try {
      await celebrityModel.findByIdAndRemove(req.params.id);
      res.redirect("/celebrities")
    } catch(err) {
      next(err);
    }
  });

router.get("/celebrities/edit/:id", async (req, res, next) => {
    try {
      const celebrity = await celebrityModel.findById(req.params.id);
      res.render("celebrities/edit",celebrity);
    } catch(err) {
      next(err);
    }
  });

  router.post("/celebrities/edit/:id", async (req, res) => {
    try {
      await celebrityModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/celebrities");
    } catch(err) {
      next(err);
    }
  });



module.exports = router;