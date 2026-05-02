function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: "not found",
        message: "page non trovata"
    })
}

module.exports = notFound;