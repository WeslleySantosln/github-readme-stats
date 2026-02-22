import handler from "../api/index.js";

const req = {
  query: {
    username: "WeslleySantosln",
    show_icons: "true",
    count_private: "true",
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
