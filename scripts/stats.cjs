(async () => {
  const mod = await import("../api/index.js");
  const handler = mod.default;

  const req = {
    query: {
      username: "WeslleySantosln",
      show_icons: "true",
      count_private: "true",
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
