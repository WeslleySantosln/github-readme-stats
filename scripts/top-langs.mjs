import handler from "../api/top-langs.js";

// Verifica se o token existe
if (!process.env.PAT_1 && !process.env.GITHUB_TOKEN) {
  console.error("ERROR: No GitHub token found!");
  console.error("Set PAT_1 or GITHUB_TOKEN environment variable");
  process.exit(1);
}

const req = {
  query: {
    username: "WeslleySantosln",
    layout: "compact",
    hide_border: "true",
    theme: "radical", // opcional: escolha seu tema
  },
};

let outputData = "";
const headers = {};

const res = {
  setHeader: (key, value) => {
    headers[key] = value;
  },
  
  status: function(code) {
    this.statusCode = code;
    return this;
  },
  
  send: function(data) {
    if (data) {
      outputData += data;
    }
    return this;
  },
  
  end: function(data) {
    if (data) {
      outputData += data;
    }
  },
  
  statusCode: 200,
  headersSent: false,
};

try {
  await handler(req, res);
  
  if (res.statusCode && res.statusCode !== 200) {
    console.error(`HTTP Status: ${res.statusCode}`);
    console.error("Output:", outputData);
    process.exit(1);
  }
  
  if (!outputData || outputData.length < 100) {
    console.error("Invalid or empty output generated");
    console.error("Output:", outputData);
    process.exit(1);
  }
  
  // Verifica se é SVG válido
  if (!outputData.includes('<svg') || !outputData.includes('</svg>')) {
    console.error("Generated output is not a valid SVG");
    console.error("Output:", outputData.substring(0, 500));
    process.exit(1);
  }
  
  process.stdout.write(outputData);
  
} catch (error) {
  console.error("Error generating top langs:", error.message);
  console.error("Stack:", error.stack);
  process.exit(1);
}
