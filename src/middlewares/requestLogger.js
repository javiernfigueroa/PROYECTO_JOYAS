const requestLogger = (req, _, next) => {
    const queryParams = req.query;
    const url = req.url;
    console.log(`=============================================================\n${new Date()} \nruta: ${url}\nqueries: `, queryParams);
    next();
  };

  module.exports = {
    requestLogger,
  };
