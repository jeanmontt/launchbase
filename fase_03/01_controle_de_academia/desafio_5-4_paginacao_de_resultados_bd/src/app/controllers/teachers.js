const { age, date, graduation } = require("../../lib/utils");
const Teacher = require("../models/teacher");

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
      callback(teachers) {
        const pagination = {
          total: teachers.length == 0 ? teachers: Math.ceil(teachers[0].total / limit),
          page
        };

        teachers = teachers.map(teacher => {
          const newTeacher = {
            ...teacher,
            services: teacher.services.split(",")
          }
  
          return newTeacher;
        });

        return res.render("teachers/index", { teachers, pagination, filter });
      }
    };

    Teacher.paginate(params);
  },

  create(req, res) {
    return res.render("teachers/create");
  },

  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    };

    Teacher.create(req.body, (teacher) => {
      return res.redirect(`/professores/${teacher.id}`);
    });
  },

  show(req, res) {
    Teacher.find(req.params.id, (teacher) => {
      if (!teacher) return res.send("Teacher not found!");

      teacher.age = age(teacher.birth);
      teacher.graduation = graduation(teacher.graduation);
      teacher.services = teacher.services.split(",");
      teacher.created_at = date(teacher.created_at).format;

      return res.render("teachers/show", { teacher });
    });
  },

  edit(req, res) {
    Teacher.find(req.params.id, (teacher) => {
      if (!teacher) return res.send("Teacher not found!");

      teacher.birth = date(teacher.birth).iso;

      return res.render("teachers/edit", { teacher });
    });
  },

  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!");
      }
    };

    Teacher.update(req.body, () => {
      return res.redirect(`/professores/${req.body.id}`);
    });
  },

  delete(req, res) {
    Teacher.delete(req.body.id, () => {
      return res.redirect("/professores");
    });
  }
};