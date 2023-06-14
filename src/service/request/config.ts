let BASE_URL = "";
const TIME_OUT = 10000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
  // TIME_OUT;
} else {
  console.log("NOT DEV ENV");
}

export { BASE_URL, TIME_OUT };
