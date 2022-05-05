import server from "./http";

server.listen(process.env.PORT || 5000, () => {
  console.log("LISTEING AT 5000");
});
