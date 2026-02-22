(async () => {
  const mod = await import("../api/top-langs.js");
  const handler = mod.default;

  const req = {
    query: {
      username: "WeslleySantosln",
      layout: "compact",
    },
  };

  const res = {
    setHeader: () => {},
    status: () => ({
      send: (data) => console.log(data),
    }),
    send: (data) => console.log(data),
  };

  await handler(req, res);
})();
