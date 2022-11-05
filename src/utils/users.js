
export const isValidEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
);

export const isValidPassword = (password) => password.length >= 8;


export const isValidName = (name) => {
    return typeof name === "string" && name.length > 3 && name.length < 20;
}