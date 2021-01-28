const fs = require("fs");
const Intl = require("intl");
const { age, date, graduation } = require("./utils");
const data = require("./data.json");

//Index
exports.index = (req, res) => {
  let teachers = data.teachers.map(teacher =>{
    const newTeacher = {
      ...teacher,
      services: teacher.services.split(",")
    }
    return newTeacher;
  });

  return res.render("teachers/index", { teachers });
}

//Create
exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  };

  let {
    avatar_url,
    name,
    birth,
    education,
    class_type,
    services
  } = req.body;

  birth = Date.parse(birth);
  const id = Number(data.teachers.length + 1);
  const created_at = Date.now();

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    education,
    class_type,
    services,
    created_at
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file erro!");

    return res.redirect("/professores");
  });
};

//Show
exports.show = (req, res) => {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send("Teacher not found!");

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    graduation: graduation(foundTeacher.graduation),
    services: foundTeacher.services.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
  }

  return res.render("teachers/show", { teacher });
};

//Edit
exports.edit = (req, res) => {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send("Teacher not found!");

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  };

  return res.render("teachers/edit", { teacher });
};

//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex;
      return true
    }
  });

  if (!foundTeacher) return res.send("Teacher not found!");

  const teacher = {
    ...foundTeacher,
    ...req.body,
    id: Number(req.body.id),
    birth: Date.parse(req.body.birth)
  };

  data.teachers[index] = teacher;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect(`/professores/${id}`);

    // return console.log(teacher)
  });
};

//Delete
exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredTeachers = data.teachers.filter(function(teacher) {
    return teacher.id != id;
  });

  data.teachers = filteredTeachers;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/professores");
  });
};