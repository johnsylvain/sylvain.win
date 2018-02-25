import { h } from '../../lib'
import style from './styles'

const Graph = ({ rows }) => (
  <pre className={style.graph}>
    {rows.map(row => (
      <div className={style.graphRow}>
        <span>{row.label} </span>
        <span className={style.bold}>[{row.detail}] </span>
        <span>{'*'.repeat(row.value)}</span>
      </div>
    ))}
  </pre>
)

export default Graph
