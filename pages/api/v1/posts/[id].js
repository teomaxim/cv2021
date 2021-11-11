import axios from 'axios';

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
    const post = axiosRes.data;
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(err.status || 400).end('  API error');
  }
}
