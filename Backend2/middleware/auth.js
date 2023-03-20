const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, 'fullstackproject');
        const user = User.findOne({ _id : decode._id, 'tokens.token': token  })
        if (!user){
            throw new Error("user dont exists")
        }
        req.user = await user;
        req.token = await token;
        next();
    } catch (e) {
        res.send("User not authenticated!")
        console.log(e)
    }
};

module.exports = auth;