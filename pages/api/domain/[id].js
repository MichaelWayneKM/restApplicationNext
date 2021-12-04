import Domain from "../../../models/domains"
import connectDB from './../../../middleware/server';

async function userHandler(req, res) {
    const {
      query: { id, name },
      method,
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.send("Try sending a Put Request.")
        break
      case 'PUT':
        // Update or create data in your database
        
        const data = JSON.parse(req.body)
        const newDomain = await Domain.findOneAndUpdate({ ownerID: `${id}`}, data)
        res.json(newDomain)
        
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default connectDB(userHandler);