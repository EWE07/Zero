function ValidToken(token) {
  if (token) {
    if (typeof token !== String) {
      throw new ReferenceError("Token is not a  String");
    }
  }
}

module.exports = {
  ValidToken,
};
