const data2 = {"name":"adam","email":"adamemail@gmail.com","description":"bad foot"}

const server = Bun.serve({
    port: 3010,
    fetch(req) {
      console.log("New connection!");
      const jsonResponse = JSON.stringify(data2);
      return new Response(jsonResponse, {
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  console.log(`Listening on ${server.url}`);
  
  