export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
      },
      getNumberOfDepartment(empList) {
        return Object.keys(empList).length;
      },
  };
}
