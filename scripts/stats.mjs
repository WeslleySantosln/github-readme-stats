import { handler } from "../api/index.js";

const req = {
  query: {
    username: "WeslleySantosln",
    show_icons: "true",
    theme: "tokyonight",
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
