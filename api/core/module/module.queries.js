
module.exports = {
  get: 'SELECT * FROM module',
  getFreshInstalledModule: 'SELECT * FROM module WHERE status = 1;' ,
  updateStatusToInstalled: 'UPDATE module SET status = 0 WHERE status = 1;' 
};