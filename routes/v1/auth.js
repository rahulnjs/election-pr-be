var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '';


router.get('/login', async function (req, res, next) {
    const { username, passowrd } = req.body;
    const user = await VOTERS_COLLECTION.findOne({ username });
    if (user) {
        const result = await bcrypt.compare(passowrd, user.passowrd);
        if (result) {
            delete user.passowrd;
            const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
            res.json({
                token,
                user: getNonPrivateData(user)
            });
        } else {
            res.json(loginFailureResponse());
        }
    } else {
        res.json(loginFailureResponse());
    }
});

function getNonPrivateData(u) {
    //decide later
    return u;
}

function loginFailureResponse() {
    return {
        err: true,
        msg: 'Username or password is wrong'
    };
}

module.exports = router;
