import axios from 'axios';

const fetcher = (url: string) =>
  axios.get(url).then((response) => response.data.data);

export default fetcher;
