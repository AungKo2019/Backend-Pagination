
const db = require('./db');
const helper = require('../../helper');
const config = require('../../config')

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  console.log(offset);
  console.log(config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM Users LIMIT ${offset},${config.listPerPage}`
  );
  console.log(rows);
  const data = helper.emptyOrRows(rows);
  console.log(data);
  const meta = {page};
  console.log(page);
  console.log(meta);

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}