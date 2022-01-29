const router = require("express").Router();
const Workout = require("../models/workoutModel");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err));
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log(dbWorkout);
      return res.json(dbWorkout);
    })
    .catch(err => res.status(400).json(err));
});
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(404).json(err));
});

module.exports = router;