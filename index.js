const soap = require('soap');

const url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl'

soap.createClient(url, (error, client) => {
  if (error) {
    console.log(error);
  } else {
    console.log(client);
  }
});