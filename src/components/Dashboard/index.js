import { h } from '../../lib'
import style from './styles'

import Graph from '../Graph'

const Dashboard = (
  {
    stats: {
      time: { hour, minute },
      languages,
      graph
    }
  }
) => {
  const maxLanguageLength = languages
    .map(l => l.name)
    .sort((a, b) => b.length - a.length)[0]
    .length

  const maxTimeLength = graph
    .map(t => t.value)
    .sort((a, b) => b - a)[0]

  return (
    <div>
      <p className={style.p}>In the past 7 days, I have coded for
        <strong className={style.bold}> {hour} hrs {minute} mins</strong>.
      </p>
      <Graph rows={graph.map(row => ({
        label: row.date,
        detail: row.time,
        value: (row.value / maxTimeLength) * 50
      }))}/>
      <p className={style.p}>Top languages:</p>
      <Graph rows={languages.map(row => ({
        label: row.name.padEnd(maxLanguageLength),
        detail: row.percent.toFixed(2) + '%',
        value: row.percent / 2
      }))}/>
      <p className={style.footer}>
        Powered by <a href="https://wakatime.com"  className={style.footer}>wakatime.com</a>
      </p>
    </div>
  )
}

export default Dashboard
