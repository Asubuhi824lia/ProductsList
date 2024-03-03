import { format } from "date-fns";
import md5 from "md5";

export const apiUrl = "https://api.valantis.store:41000/";
const apiPasswd = "Valantis";

const timestamp = () => format(new Date(), "yyyy MM dd").split(" ").join("");
const auth = () => md5(`${apiPasswd}_${timestamp()}`);

export const commonOptions = {
  method: "POST",
  headers: {
    "X-Auth": auth(),
    "Content-Type": "application/json;charset=utf-8",
  },
  mode: "cors",
  cache: "default",
};
