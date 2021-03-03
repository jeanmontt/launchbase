const { grade, date } = require("../../lib/utils");
const Student = require("../models/student");

module.exports = {
  index(req, res) {
    let { filter, page, limit } = req.query;

    page = page || 1;
    limit = limit || 2;
    let offSet = limit * (page - 1);

    const params = {
      filter,
      page,
      limit,
      offSet,
      callback(students) {
        const pagination = {
          total: students.length == 0 ? students: Math.ceil(students[0].total / limit),
          page
        };
        
        students = students.map(student => {
          const newStudent = {
            ...student,
            school_year: grade(student.school_year)
          }
  
          return newStudent;
        });

        return res.render("students/index", { students, pagination, filter });
      }
    };

    Student.paginate(params);
  },

  create(req, res) {
    Student.teachersSelectOptions((options) => {
      return res.render("students/create", { teacherOptions: options });
    });
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    };

    Student.create(req.body, (student) => {
      return res.redirect(`/alunos/${student.id}`);
    });
  },

  show(req, res) {
    Student.find(req.params.id, (student) => {
      if (!student) return res.send("Student not found!");

      student.birth = date(student.birth).format;
      student.school_year = grade(student.school_year);

      return res.render("students/show", { student });
    });
  },

  edit(req, res) {
    Student.find(req.params.id, (student) => {
      if (!student) return res.send("Student not found!");

      student.birth = date(student.birth).iso;

      Student.teachersSelectOptions((options) => {
        return res.render("students/edit", { student, teacherOptions: options });
      });
    });
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    };

    Student.update(req.body, () => {
      return res.redirect(`/alunos/${req.body.id}`);
    });
  },

  delete(req, res) {
    Student.delete(req.body.id, () => {
      return res.redirect("/alunos");
    });
  }
};