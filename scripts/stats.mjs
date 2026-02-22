import handler from "../api/index.js";

const req = {
  query: {
    username: "WeslleySantosln",
    show_icons: "true",
    count_private: "true",
  },
};

let svg = "";
let statusCode = 200;

const res = {
  setHeader: () => {},
  status: (code) => {
    statusCode = code;
    return res; // retorna o próprio objeto para permitir chaining
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
  console.error("Error generating stats:", error);
  process.exit(1);
}
