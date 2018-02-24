const fetch = require('isomorphic-fetch')
/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  fetch(`https://wakatime.com/share/@johnsylvain/75912b47-4ab5-46ce-babd-b1883a7e211b.json`, {
    mode: 'cors',
  })
    .then(res => res.json())
    .then(json => {
      //const seconds = json.data.reduce((acc, cur) => acc + cur.grandTotal.total_seconds, 0)
      cb(null, json.data);
    })
};