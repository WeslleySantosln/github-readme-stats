import handler from "../api/top-langs.js";

const req = {
  query: {
    username: "WeslleySantosln",
    layout: "compact",
  },
};

let outputData = "";
const headers = {};

// Mock completo e robusto do objeto res
const res = {
  // Armazena headers
  setHeader: (key, value) => {
    headers[key] = value;
  },
  
  // Retorna o próprio objeto para permitir chaining
  status: function(code) {
    this.statusCode = code;
    return this;
  },
  
  // Captura o conteúdo enviado
  send: function(data) {
    if (data) {
      outputData += data;
    }
    return this;
  },
  
  // Captura o conteúdo no end
  end: function(data) {
    if (data) {
      outputData += data;
    }
  },
  
  // Propriedades adicionais que podem ser acessadas
  statusCode: 200,
  headersSent: false,
};

try {
  await handler(req, res);
  
  // Verifica se houve erro
  if (res.statusCode && res.statusCode !== 200) {
    console.error(`HTTP Status: ${res.statusCode}`);
    console.error("Output:", outputData);
    process.exit(1);
  }
  
  // Verifica se há conteúdo
  if (!outputData) {
    console.error("No output generated");
    process.exit(1);
  }
  
  // Envia para stdout
  process.stdout.write(outputData);
  
} catch (error) {
  console.error("Error generating top langs:", error);
  console.error("Stack:", error.stack);
  process.exit(1);
}
