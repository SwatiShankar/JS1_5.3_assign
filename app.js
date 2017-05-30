var Employee = {
	empName  	: "Swati",
	empAge   	: 24,
	empSalary	: 30000,
	empAddress	: {
		City  	: "Bangalore",
		State	: "Karnataka",
		pinCode : 560059
	}
};

console.log("Employee Name : " + Employee.empName);	//Object.1stPropertyName

console.log("Employee Age : " + Employee['empAge']); //Object['2nd PropertyName']

console.log("Employee Salary : " + Employee["empSalary"]); //Object["3rd PropertyName"]

//console.log("Employee Address : " +Employee.empAddress );

console.log("Employee City : " + Employee.empAddress.City); //Object.NestedObject.NestedObject 1st propertyName

console.log("Employee State : " + Employee.empAddress['State']); //Object.NestedObject['NestedObject 2nd propertyName']

console.log("PinCode : " + Employee.empAddress["pinCode"]); //Object.NestedObject["NestedObject 2nd propertyName"]