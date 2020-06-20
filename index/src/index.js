import { h, kobra } from "kobra";
import style from "./styles/style.scss";

const app = kobra();

const initialState = {
  sites: [
    {
      url: "https://music.sylvain.win",
      name: "Music 🎺",
      description: "music production site"
    },
    {
      url: "https://stats.sylvain.win",
      name: "Stats 📊",
      description: "live coding stats"
    },
    {
      url: "https://todos.sylvain.win",
      name: "Todos 📝",
      description: "kobra todo app"
    }
  ]
};

app.store({}, initialState);

app.route("/", state => (
  <div className={style.container}>
    <header>
      <span>🏅</span>
      <h1>sylvain.win</h1>
      <p>My code playscape.</p>
    </header>
    <main className={style.grid}>
      {state.sites.map((site, index) => (
        <a
          href={site.url}
          target="_blank"
          className={style.card}
          style={`animation-delay: ${100 * index}ms;`}
        >
          <h3>{site.name}</h3>
          <p>{site.description}</p>
        </a>
      ))}
    </main>
    <footer>
      <div>&copy; John Sylvain {new Date().getFullYear()}</div>
      <div>
        Built with <a href="https://github.com/johnsylvain/kobra">Kobra</a>.
      </div>
    </footer>
  </div>
));

app.mount(document.querySelector("#app"));
