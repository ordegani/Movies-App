const router = require("express").Router();
const { Movie } = require("../models/MovieModel");

router.route('/').post((req, res) => {
    const title = req.body.title;
    const release = req.body.release;
    const img = req.body.img;
    const rating = Number(req.body.rating);
    const onClick= Function(req.body.rating);
    const text = req.body.rating;

    const newMovie= new Movie({
        title,
        release,
        overview,
        img,
        rating,
        onClick,
        text,
    })
})
module.exports = router;
