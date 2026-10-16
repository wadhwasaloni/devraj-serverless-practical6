
exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      message: "Smart Café is online! Your serverless function is working."
    })
  };
};
