const { date } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`
      SELECT *
      FROM students
      ORDER BY name ASC`, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
      INSERT INTO students (
        name,
        avatar_url,
        email,
        birth,
        school_year,
        class_type,
        workload
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.name,
      data.avatar_url,
      data.email,
      date(data.birth).iso,
      data.school_year,
      data.class_type,
      data.workload
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  find(id, callback) {
    db.query(`
      SELECT *
      FROM students
      WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  update(data, callback) {
    const query = `
      UPDATE students SET
        name=($1),
        avatar_url=($2),
        email=($3),
        birth=($4),
        school_year=($5),
        class_type=($6),
        workload=($7)
      WHERE id = $8
    `;

    const values = [
      data.name,
      data.avatar_url,
      data.email,
      data.birth,
      data.school_year,
      data.class_type,
      data.workload,
      data.id
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  },

  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  }
};