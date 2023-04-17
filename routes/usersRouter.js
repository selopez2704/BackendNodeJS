const express = require('express');

const router = express.Router();


// Users query params

router.get('/',(req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    })
  }else{
    res.send("There's no query params ");
  }

});

module.exports = router;
