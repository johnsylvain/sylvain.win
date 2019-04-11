import { h, render } from './dom'

const sites = [
  {
    url: 'https://sylvain.win',
    name: 'index',
    description: 'index of sylvain.win'
  },
  {
    url: 'https://music.sylvain.win',
    name: 'music',
    description: 'music production site'
  },
  {
    url: 'https://stats.sylvain.win',
    name: 'stats',
    description: 'live coding stats'
  },
  {
    url: 'https://todos.sylvain.win',
    name: 'todos',
    description: 'kobra todo app'
  }
]

const ListItem = ({ site }) => (
  <li>
    <strong>{site.name}</strong> - [<a href={site.url}>{site.url}</a>] - {site.description}
  </li>
);

class App {
  static isClass = {};

  constructor(props) {
    this.props = props;
  }

  render() {
    return (
      <ul>
        {this.props.sites.map(site =>
          <ListItem site={site}></ListItem>
        )}
      </ul>
    );
  }
}

render(
  <App sites={sites} />,
  document.querySelector('#app')
);