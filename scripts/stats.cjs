import { handler } from "../api/index.js";

const req = {
  query: {
    username: "WeslleySantosln",
    theme: "tokyonight",
    show_icons: "true",
  },
};

let svg = "";

const res = {
  setHeader() {},
  status() {
    return this;
  },
  end(data) {
    svg += data;
  },
};

await handler(req, res);

process.stdout.write(svg);
