const fetch = require('isomorphic-fetch')

function convert (seconds)  {
  var hour, minute;

  minute = Math.floor(seconds / 60)
  seconds = seconds % 60
  hour = Math.floor(minute / 60)
  minute = minute % 60

  return {
      hour,
      minute,
      seconds
  };
}

const getTime = new Promise((resolve, reject) => {
  fetch('https://wakatime.com/share/@johnsylvain/75912b47-4ab5-46ce-babd-b1883a7e211b.json')
    .then(res => res.json())
    .then(json => {
        const seconds = json.data.reduce((acc, cur) => acc + cur.grand_total.total_seconds, 0)
        return resolve(convert(seconds))
    })
})

const getLanguages = new Promise((resolve, reject) => {
  fetch('https://wakatime.com/share/@johnsylvain/69c54bff-19e2-41a4-970d-5da9e24427d6.json')
    .then(res => res.json())
    .then(json => {
        return resolve(json.data.filter(i => i.name !== 'Other').splice(0, 3))
    })
})
/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  Promise.all([getTime, getLanguages])
    .then(result => {
      cb(null, {
        time: result[0],
        languages: result[1]
      })
    })
};