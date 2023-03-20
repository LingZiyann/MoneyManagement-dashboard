const User = require('../models/User');
const HttpError = require('../models/httpError');

const signup = async (req, res) => {
    const { name, password } = req.body;
    const user = new User(req.body);
    let existingUser;;
    try {
      existingUser = await User.findOne({ name: name })
    } catch (err) {
        res.send(err);
        console.log(err);
    };
    if (existingUser) {
        return res.send("name exists");
    };
    try {
        await user.save();
        user.generateAuthToken();
        res.send("successfully signed up");
    } catch (err) {
        res.send(err);
        console.log(err);
    };
};

const login = async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.name, req.body.password);
        const token = user.generateAuthToken();
        res.send("logged in!");
    } catch (e){
        res.send("Unable to login!");
        console.log(e);
    };
};

exports.signup = signup;
exports.login = login;