import handler from "../api/top-langs.js";

const req = {
  query: {
    username: "WeslleySantosln",
    layout: "compact",
  },
};

let svg = "";
let statusCode = 200;

const res = {
  setHeader: () => {},
  status: (code) => {
    statusCode = code;
    return res;
  },
  send: (data) => {
    svg += data;
    return res;
  },
  end: (data) => {
    if (data) svg += data;
  },
};

try {
  await handler(req, res);
  
  if (statusCode !== 200) {
    console.error(`Status code: ${statusCode}`);
    process.exit(1);
  }
  
  process.stdout.write(svg);
} catch (error) {
  console.error("Error generating top langs:", error);
  process.exit(1);
}
