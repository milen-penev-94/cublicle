const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCube = (req,res) => {
    res.render('create');
}

exports.postCreateCube = (req, res) => {
    console.log(req.body);
    // save
    const { name, desciption, imageUrl, difficultyLevel } = req.body
    let cube = new Cube(name, desciption, imageUrl, difficultyLevel );
   
    cube.save();

    // redirect
    res.redirect('/');
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        return res.redirect('404');
    }

    let cube = db.cubes.find(x => x.id === cubeId);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};