import Domain from "../../../../models/domains"
import connectDB from './../../../../middleware/server';

async function userHandler(req, res) {
    const {
      query: { id, name },
      method,
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        const newDomain = await Domain.find({ ownerID: `${id}`})
        res.json(newDomain)
        break
      
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default connectDB(userHandler);