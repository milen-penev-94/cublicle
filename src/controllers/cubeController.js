const Cube = require('../models/Cube');

exports.getCreateCube = (req,res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    console.log(req.body);
    // save
    const { name, desciption, imageUrl, difficultyLevel } = req.body
    let cube = new Cube(name, desciption, imageUrl, difficultyLevel );
    Cube.save(cube);

    // redirect
    res.redirect('/');
};