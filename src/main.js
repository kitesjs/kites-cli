const kites = require('@kites/core');

kites.engine({
  loadConfig: true
})
  .init()
  .then(app => {
    app.logger.info('Kites application started!');
  })
  .catch(err => {
    console.error('Kites start app error: ', err);
  });
