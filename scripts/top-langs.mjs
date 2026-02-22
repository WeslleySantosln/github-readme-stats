import handler from "../api/top-langs.js";

const req = {
  query: {
    username: "WeslleySantosln",
    layout: "compact",
  },
};

let svg = "";

const res = {
  setHeader() {},
  status() {
    return this;
  },
  send(data) {
    svg += data;
  },
  end(data) {
    if (data) svg += data;
  },
};

await handler(req, res);

process.stdout.write(svg);
