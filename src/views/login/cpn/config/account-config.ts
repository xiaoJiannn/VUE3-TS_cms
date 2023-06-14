export const rule = {
  name: [
    {
      required: true,
      message: "username can not be empty",
      // trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{1,}$/,
      message: "username must follow rules",
      // trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "password can not be empty",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{1,}$/,
      message: "password must follow rules",
      trigger: "blur",
    },
  ],
};
