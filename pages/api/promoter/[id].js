import { getConnection } from "../../../utils/planetscale";

export default async function handler(req, res) {
  const { id } = req.query;
  const conn = getConnection();

  const results = await conn.execute(`select * from Promoter where id = '${id}'`);
  
  const response = results;

  res.status(200).json({ response });

}

