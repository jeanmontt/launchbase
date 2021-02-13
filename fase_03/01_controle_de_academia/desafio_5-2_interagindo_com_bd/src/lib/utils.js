module.exports = {
  age(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1;
    }

    return age;
  },

  date(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    };
  },

  graduation(graduation) {
    switch (graduation) {
      case "EM":
        return graduation = "Ensino Médio Completo";
      case "ES":
        return graduation = "Ensino Superior Completo";
      case "M":
        return graduation = "Mestrado";
      case "D":
        return graduation = "Doutorado";
    }
  },

  grade(school_year) {
    switch (school_year) {
      case "5EF":
        return school_year = "5º ano - Ensino fundamental";
      case "6EF":
        return school_year = "6º ano - Ensino fundamental";
      case "7EF":
        return school_year = "7º ano - Ensino fundamental";
      case "8EF":
        return school_year = "8º ano - Ensino fundamental";
      case "9EF":
        return school_year = "9º ano - Ensino fundamental";
      case "1EM":
        return school_year = "1º ano - Ensino médio";
      case "2EM":
        return school_year = "2º ano - Ensino médio";
      case "3EM":
        return school_year = "3º ano - Ensino médio";
    }
  }
};