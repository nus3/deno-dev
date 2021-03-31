addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Nus3", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    })
  );
});
