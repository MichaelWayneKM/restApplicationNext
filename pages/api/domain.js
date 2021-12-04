require("dotenv").config();
const Domain = require("../../models/domains");
import connectDB from "./../../middleware/server";

async function getDomains(req, res) {
  const domains = await Domain.find({});
  res.send(domains);
}

async function addDomain(req, res) {
  try {
    const data = JSON.parse(req.body);
    const transaction = await Domain.create(data);

    res.json(transaction);
  } catch (err) {
    res.send({ error: err.message });
  }
}



const handler = async (req, res) => {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getDomains(req, res);
    }

    case "POST": {
      return addDomain(req, res);
    }

    case "DELETE": {
      return searchDomain(req, res);
    }
  }
};

export default connectDB(handler);
