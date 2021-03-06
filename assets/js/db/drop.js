/*
* Flushes the database
*/
'use strict'

require('env2')('./config.env')

const Schema = require('../../../server/db/schema.js')()

const s = Schema.settings

console.log('Dropping all tables from ', s.host + ':' + s.port + '/' + s.database)

Schema.adapter.dropAllTables(() => {
  console.log('Tables dropped successfully')
  console.log('Disconnecting')
  Schema.client.end()
})
