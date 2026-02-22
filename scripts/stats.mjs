import handler from "../api/index.js";

// Verifica se o token existe
if (!process.env.PAT_1 && !process.env.GITHUB_TOKEN) {
  console.error("ERROR: No GitHub token found!");
  process.exit(1);
}

console.error("Starting stats generation...");
console.error("Username: WeslleySantosln");

const req = {
  query: {
    username: "WeslleySantosln",
    show_icons: "true",
    count_private: "true",
    include_all_commits: "false",
    hide_border: "true",
  },
};

let outputData = "";
const headers = {};

const res = {
  setHeader: (key, value) => {
    headers[key] = value;
    console.error(`Header set: ${key} = ${value}`);
  },
  
  status: function(code) {
    this.statusCode = code;
    console.error(`Status code: ${code}`);
    return this;
  },
  
  send: function(data) {
    if (data) {
      outputData += data;
      console.error(`Data received: ${data.length} bytes`);
    }
    return this;
  },
  
  end: function(data) {
    if (data) {
      outputData += data;
      console.error(`End data received: ${data.length} bytes`);
    }
  },
  
  statusCode: 200,
  headersSent: false,
};

try {
  console.error("Calling handler...");
  await handler(req, res);
  
  console.error(`Final status: ${res.statusCode}`);
  console.error(`Output length: ${outputData.length}`);
  
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
  if (!outputData.includes('<svg')) {
    console.error("Generated output is not a valid SVG");
    console.error("Output preview:", outputData.substring(0, 500));
    process.exit(1);
  }
  
  console.error("SVG generated successfully!");
  process.stdout.write(outputData);
  
} catch (error) {
  console.error("Error generating stats:", error.message);
  console.error("Stack:", error.stack);
  process.exit(1);
}
