module.exports = () => {
  const APP = {};
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'production') { }
  if (NODE_ENV === 'development') { }
  if (NODE_ENV === 'test') { }

  return APP;
}
