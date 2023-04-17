export default function createIteratorObject(report) {
  let allEmp = [];
  for (const list of Object.values(report.allEmp)) {
    allEmp = [
      ...allEmp,
      ...list,
    ];
  }
  return allEmp;
}
