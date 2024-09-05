let students = []
// let students = [
//     {
//       id: 1,
//       firstName: "John",
//       lastName: "Doe",
//       studentId: "JD2024",
//       studentDepartment: "Software Engineering",
//       studentSession: "2024/2025",
//       courses: ["Module 317 (Typescript)", "MODULE 308 (JAVASCRIPT)", "Module 316 (Document Object Model)", "Module 319 (Express)"]
//     },
//     {
//       id: 2,
//       firstName: "Jane",
//       lastName: "Smith",
//       studentId: "JS2024",
//       studentDepartment: "Cyber Security",
//       studentSession: "2024/2025",
//       courses: ["Introduction to Cybersecurity", "Network Security"]
//     },
//     {
//       id: 3,
//       firstName: "Bob",
//       lastName: "Johnson",
//       studentId: "BJ2025",
//       studentDepartment: "Software Engineering",
//       studentSession: "2025/2026",
//       courses: ["Module 317 (Typescript)", "MODULE 308 (JAVASCRIPT)", "Module 316 (Document Object Model)", "Module 319 (Express)"]
//     },
//     {
//       id: 4,
//       firstName: "Alice",
//       lastName: "Williams",
//       studentId: "AW2025",
//       studentDepartment: "Cyber Security",
//       studentSession: "2025/2026",
//       courses: ["Introduction to Cybersecurity", "Network Security"]
//     },
//     {
//       id: 5,
//       firstName: "Charlie",
//       lastName: "Brown",
//       studentId: "CB2024",
//       studentDepartment: "Software Engineering",
//       studentSession: "2024/2025",
//       courses: ["Module 317 (Typescript)", "MODULE 308 (JAVASCRIPT)", "Module 316 (Document Object Model)", "Module 319 (Express)"]
//     }
//   ];
  
  let courses = [
    {
      id: "MD317",
      code: "Module 317",
      name: "Typescript",
      department: "Software Engineering",
      credits: 3
    },
    {
      id: "MD308",
      code: "MODULE 308",
      name: "JAVASCRIPT",
      department: "Software Engineering",
      credits: 4
    },
    {
      id: "MD316",
      code: "Module 316",
      name: "Document Object Model",
      department: "Software Engineering",
      credits: 3
    },
    {
      id: "MD319",
      code: "Module 319",
      name: "Express",
      department: "Software Engineering",
      credits: 4
    },
    {
      id: "CY101",
      code: "CY101",
      name: "Introduction to Cybersecurity",
      department: "Cyber Security",
      credits: 3
    },
    {
      id: "CY201",
      code: "CY201",
      name: "Network Security",
      department: "Cyber Security",
      credits: 4
    },
   
  ];

  let hostels = []
  
  // let hostels = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     lastName: "Doe",
  //     studentId: "JD2024",
  //     studentHostel: "Maple Hall",
  //     studentRoom: "101"
  //   },
  //   {
  //     id: 2,
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     studentId: "JS2024",
  //     studentHostel: "Oak Hall",
  //     studentRoom: "202"
  //   },
  
  // ];
  
  module.exports = { students, courses, hostels };