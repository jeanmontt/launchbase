module.exports = {
  age: function(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }

    return age;
  },
  graduation: function(graduation) {
    switch (graduation) {
      case "EM":
        return graduation = "Ensino Médio Completo";
      case "ES":
        return graduation ="Ensino Superior Completo";
      case "M":
        return graduation = "Mestrado";
      case "D": 
        return graduation = "Doutorado";
    }
  }
};