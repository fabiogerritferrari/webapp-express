function index(req, res) {
    res.send('rotta di index')
}

function show(req, res) {
    res.send('rotta di show')
}

exports.module = { index, show };