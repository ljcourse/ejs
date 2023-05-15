const Sport = require('../pkg/sports/sportSchema');

exports.getBlogView = async (req, res) => {
    try {
        const sport = await Sport.find();
        res.status(200).render("sport", {
            sport,
        });
    } catch (err) {
        res.status(500).send("Error this page");

    }
};
exports.getSport = async (req, res) => {
    try {
        const sport = await Sport.find();
        res.status(200).render("login", {
            sport,
        });
    } catch (err) {
        res.status(500).send("Error this page");

    }
};

exports.createBlog = async (req, res) => {
    try {
        await Sport.create(req.body);
        res.status(200).redirect('/view');
    } catch (err) {
        console.log(err);
        res.status(500).send('err')
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        await Sport.findByIdAndDelete(id);
        res.redirect('/view');
    } catch (err) {
        console.log(err);
        res.status(500).send('error deleting blog');
    }
};

exports.updateBlog = async (req, res) => {
    try {
        await Sport.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).redirect('/view');
    } catch (err) {
        console.log(err);
        res.status(500).send('err')
    }
};