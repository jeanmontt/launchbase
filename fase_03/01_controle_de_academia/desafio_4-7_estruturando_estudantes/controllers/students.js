const fs = require("fs");
const Intl = require("intl");
const { date, grade } = require("../utils");
const data = require("../data.json");

exports.index = (req, res) => {
  let students = data.students.map(student =>{
    const newStudent = {
      ...student,
      school_year: grade(student.school_year)
    }
    return newStudent;
  });

  return res.render("students/index", { students });
}

exports.create = (req, res) => {
  return res.render("students/create");
}

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  };

  birth = Date.parse(req.body.birth);

  let id = 1;
  const lastStudent = data.students[data.students.length - 1];

  if (lastStudent) {
    id = lastStudent.id + 1;
  }

  data.students.push({
    id,
    ...req.body,
    birth
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file erro!");

    return res.redirect(`/alunos/${id}`);
  });
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundStudent = data.students.find(function(student) {
    return student.id == id;
  });

  if (!foundStudent) return res.send("Student not found!");

  const student = {
    ...foundStudent,
    birth: new Intl.DateTimeFormat("pt-BR").format(foundStudent.birth),
    school_year: grade(foundStudent.school_year)
  }

  return res.render("students/show", { student });
};

exports.edit = (req, res) => {
  const { id } = req.params;

  const foundStudent = data.students.find(function(student) {
    return student.id == id;
  });

  if (!foundStudent) return res.send("Student not found!");

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso
  };

  return res.render("students/edit", { student });
};

exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex;
      return true
    }
  });

  if (!foundStudent) return res.send("Student not found!");

  const student = {
    ...foundStudent,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  };

  data.students[index] = student;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect(`/alunos/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id;
  });

  data.students = filteredStudents;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/professores");
  });
};