const fs = require("fs");
const Intl = require("intl");
const data = require("../data.json");
const { age, date } = require("../utils");

exports.index = (req, res) => {
  return res.render("members/index", { members: data.members });
}

exports.create = (req, res) => {
  return res.render("members/create");
}

exports.show = (req, res) => {
  const { id } = req.params;

  const foundMembers = data.members.find(function(member) {
    return member.id == id;
  });

  if (!foundMembers) return res.send("Member not found!");

  const member = {
    ...foundMembers,
    age: age(foundMembers.birth),
  };

  return res.render("members/show", { member });
};

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  };

  let { avatar_url, name, birth, gender, services } = req.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.members.length + 1);

  data.members.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/membros");
  });
};

exports.edit = (req, res) => {
  const { id } = req.params;

  const foundMembers = data.members.find(function(member) {
    return member.id == id;
  });

  if (!foundMembers) return res.send("Member not found!");

  const member = {
    ...foundMembers,
    birth: date(foundMembers.birth)
  };

  return res.render("members/edit", { member });
};

exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundMembers = data.members.find(function(member, foundIndex) {
    if (id == member.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundMembers) return res.send("Member not found!");

  const member = {
    ...foundMembers,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  };

  data.members[index] = member;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.sed("Write file error!");

    return res.redirect(`/membros/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredMembers = data.members.filter(function(member) {
    return member.id != id;
  });

  data.members = filteredMembers;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect("/membros");
  });
};