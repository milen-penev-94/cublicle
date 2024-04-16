const db = require('../db.json');

exports.getHomePage = (req, res) => {
    const { search: searchString, from: difficultyFrom, to: difficultyTo } = req.query;
    let cubes = db.cubes;

    if (searchString) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(searchString));   
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);   
    }

    if (difficultyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficultyTo);   
    }
    
    res.render('index', { cubes, searchString, difficultyFrom, difficultyTo });
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req,res) => {
    res.render('404');
};