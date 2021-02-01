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

exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  };

  birth = Date.parse(req.body.birth);

  let id = 1;
  const lastMember = data.members[data.members.length - 1];

  if (lastMember) {
    id = lastMember.id + 1;
  }

  data.members.push({
    id: Number(id),
    ...req.body,
    birth
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("Write file error!");

    return res.redirect(`/membros/${id}`);
  });
};

exports.show = (req, res) => {
  const { id } = req.params;

  const foundMembers = data.members.find(function(member) {
    return member.id == id;
  });

  if (!foundMembers) return res.send("Member not found!");

  const member = {
    ...foundMembers,
    birth: new Intl.DateTimeFormat("pt-BR").format(foundMembers.birth),
  };

  return res.render("members/show", { member });
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