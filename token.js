const { sign, verify } = require('jsonwebtoken');

const key = 'dkjabc38rdh273';

const getToken = (object) => (
    new Promise((resolve, reject) => {
        sign(object, key, { expiresIn: 120 }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    })
);

const getObject = (token) => (
    new Promise((resolve, reject) => {
        verify(token, key, (err, obj) => {
            if (err) return reject(err);
            resolve(obj);
        });
    })
);

module.exports = { getObject, getToken };
