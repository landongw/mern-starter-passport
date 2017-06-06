const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  sessionSecret: process.env.sessionSecret || 'ilovescotchscotchyscotchscotch',
};

export default config;
