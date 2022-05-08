var express = require('express');
var router = express.Router();
const atob = require('atob');
const btoa = require('btoa');


router.post('/voters', async function (req, res) {
  let limit = parseInt(req.body.limit || 20);
  let next = req.body.next || null;
  let filters = req.body.filters || {};
  let skip = 0;
  if (next) {
    const [_s] = atob(next).split('/');
    skip = parseInt(_s);
  }

  try {

    const results = await VOTERS_COLLECTION.find({ ...filters }).limit(limit).skip(skip).toArray();
    nextPage = skip + limit;

    res.json({
      next: btoa(`${nextPage}/${limit}`),
      results
    });
  } catch (e) {
    res.status = 500;
    res.json({ e })
  }
});

module.exports = router;
