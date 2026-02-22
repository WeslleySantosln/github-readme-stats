const { handler } = require("../api/index");

handler(
  { query: { username: "WeslleySantosln", show_icons: "true" } },
  {
    setHeader: () => {},
    status: () => ({ send: console.log }),
    send: console.log,
  }
);
