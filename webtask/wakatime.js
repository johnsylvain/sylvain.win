const fetch = require('isomorphic-fetch');

function convert (seconds)  {
  var hour, minute;

  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;

  return {
      hour,
      minute,
      seconds
  };
}

const getTime = new Promise((resolve, reject) => {
  fetch('https://wakatime.com/share/@johnsylvain/092bac11-3129-45ed-91f8-c1770edfefe6.json')
    .then(res => res.json())
    .then(json => {
      const seconds = json.data.reduce((acc, cur) => acc + cur.grand_total.total_seconds, 0);
      return resolve({
        time: convert(seconds),
        graph: json.data.map(i => ({
          date: i.range.date,
          time: i.grand_total.digital,
          value: i.grand_total.total_seconds
        })).reverse()
      });
    });
});

const getLanguages = new Promise((resolve, reject) => {
  fetch('https://wakatime.com/share/@johnsylvain/e13bf9c6-a046-4728-acde-cddb46881a04.json')
    .then(res => res.json())
    .then(json => {
      return resolve(json.data.filter(i => i.name !== 'Other').splice(0, 3));
    });
});

const getEditors = new Promise((resolve, reject) => {
  fetch('https://wakatime.com/share/@johnsylvain/93ccbfba-192d-4205-80a2-2c501b0993e0.json')
    .then(res => res.json())
    .then(json => {
      return resolve(json.data)
    })
})

/**
* @param context {WebtaskContext}
*/
module.exports = function (context, cb) {
  Promise.all([getTime, getLanguages, getEditors])
    .then(result => {
      cb(null, {
        time: result[0].time,
        graph: result[0].graph,
        languages: result[1],
        editors: result[2]
      });
    });
};
