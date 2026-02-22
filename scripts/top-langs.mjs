import { handler } from "../api/top-langs.js";

const req = {
  query: {
    username: "WeslleySantosln",
    layout: "compact",
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
