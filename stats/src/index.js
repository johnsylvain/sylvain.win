import { h, app } from "./lib";
import App from "./components/App";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({ uri: "https://api.sylvain.win" });

app({
  target: document.querySelector("#app"),

  state: {
    stats: null
  },

  actions: {
    setData: stats => () => ({ stats }),
    fetchData: () => async (state, actions) => {
      const response = await client.query({
        query: gql`
          query {
            activity {
              code {
                time {
                  hour
                  minute
                }
                graph {
                  time
                  date
                  value
                }
                languages {
                  name
                  percent
                }
              }
            }
          }
        `
      });
      actions.setData(response.data.activity.code);
    }
  },

  view: (state, actions) => (
    <div oncreate={actions.fetchData}>
      <App stats={state.stats} />
    </div>
  )
});
