import axios from "axios";
import { log } from "console";

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export default fetcher;
