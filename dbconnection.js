const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sa',
              password: 'Sumitra@12345',
              server: 'DESKTOP-MFFFHV1',
              database: 'clentside',
			  port: 1433,
			  options: {
		trustedConnection: true,
		encrypt: true,
		enableArithAbort: true,
		trustServerCertificate: true,

	  },
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();
/*
const sql = require('mssql');
class MSSqlconnection {
async getConnection(dbConfig) {
try {
	console.log("1");
return await sql.connect({
user: 'sa',
              password: 'Sumitra@12345',
              server: 'DESKTOP-MFFFHV1',
              database: 'clentside',
			  port: 1433,
			  options: {
		trustedConnection: true,
		encrypt: true,
		enableArithAbort: true,
		trustServerCertificate: true,

	  }
});
}
catch(error) {
	console.log("1",error);
}
}
}
module.exports = new MSSqlconnection();
*/

