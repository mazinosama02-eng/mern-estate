exports.errorHnadler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  errpr.message = message;
  return error;
};
