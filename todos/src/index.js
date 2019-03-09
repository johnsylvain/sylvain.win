import { Kobra } from "kobra";
import homeRoute from "./routes/home";
import reducer from "./reducer";
import "./style.css";

const app = new Kobra();

app.route("/", homeRoute);
app.use(reducer);
app.mount(document.querySelector("#app"));
