export async function handler(event) {
  const token = event.queryStringParameters.token;

  if (!token) {
    return {
      statusCode: 403,
      body: JSON.stringify({ status: "invalido" })
    };
  }

  if (token === "teste123") {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "ativo" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "expirado" })
  };
}
