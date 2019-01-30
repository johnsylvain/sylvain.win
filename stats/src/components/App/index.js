import { h } from '../../lib'
import Dashboard from '../Dashboard'
import style from './styles'

const App = ({ stats }) => (
  <div className={style.section}>
    <h1 className={style.title}>sylvain.win</h1>
    {!!stats
      ? <Dashboard stats={stats}/>
      : <p>Crunching the numbers...</p>
    }
  </div>
)

export default App
