const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb+srv://czn:root@cozone-demo.s93qn.mongodb.net/election?retryWrites=true&w=majority");


(async function init() {
    try {
        await client.connect();
        global.VOTERS_COLLECTION = client.db().collection('voters');
        global.USERS_COLLECTION = client.db().collection('users');
        global.SETTINGS_COLLECTION = client.db().collection('settings');
        console.log("connection established");
    } catch (e) {
        console.error("Mongo connection failed", e);
    }
})();