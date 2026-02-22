const { handler } = require("../api/top-langs");

handler(
  { query: { username: "WeslleySantosln", layout: "compact" } },
  {
    setHeader: () => {},
    status: () => ({ send: console.log }),
    send: console.log,
  }
);
