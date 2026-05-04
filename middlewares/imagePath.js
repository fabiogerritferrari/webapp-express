function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/imgs/moviesCover/`
    next()
};

module.exports = setImagePath;