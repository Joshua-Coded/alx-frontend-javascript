export default function createIteratorObject(report) {
  const them = [];
  
	for (const dep of Object.keys(report.allEmployees)) {
    
		for (const emp of report.allEmployees[dep]) {
      them.push(emp);
    }
  }

  return them;
}
