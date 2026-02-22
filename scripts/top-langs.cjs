(async () => {
  const { handler } = await import("../api/top-langs.js");

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
