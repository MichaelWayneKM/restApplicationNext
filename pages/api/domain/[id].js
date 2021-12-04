import Domain from "../../../models/domains";
import connectDB from "./../../../middleware/server";

async function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.send("Try sending a Put Request.");
      break;
    case "PUT":
      // Update or create data in your database

      try {
        const { id } = req.query;
        console.log(id);
        const data = JSON.parse(req.body);
        console.log(data);
        const newDomain = await Domain.findOneAndUpdate(
          { domainName: `${id}` },
          data
        );

        if(newDomain == null){
          throw new Error("Domain Does Not Exist on DB")
        }

        
        res.json(newDomain);
        //res.end(`Post: ${id}`);
      } catch (err) {
        res.json({ error: err.message });
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default connectDB(userHandler);
