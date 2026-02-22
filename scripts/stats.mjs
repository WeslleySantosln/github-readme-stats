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
  end(data) {
    svg += data;
  },
};

await handler(req, res);

process.stdout.write(svg);
