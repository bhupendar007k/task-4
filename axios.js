const axios = require('axios');
function GetRequest(path) {
	axios.get(path).then(
		(response) => {
			var result = response.data;
			console.log(result);
		},
		(error) => {
			console.log(error);
		}
	);
}
GetRequest('http://dummy.restapiexample.com/api/v1/employees');
