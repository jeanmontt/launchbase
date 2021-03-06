const { date } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`
      SELECT *
      FROM teachers
      ORDER BY name ASC`, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },

  create(data, callback) {
    const query = `
      INSERT INTO teachers (
        name,
        avatar_url,
        birth,
        graduation,
        class_type,
        services,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.name,
      data.avatar_url,
      date(data.birth).iso,
      data.graduation,
      data.class_type,
      data.services,
      date(Date.now()).iso
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  find(id, callback) {
    db.query(`
      SELECT *
      FROM teachers
      WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },

  update(data, callback) {
    const query = `
      UPDATE teachers SET
        name=($1),
        avatar_url=($2),
        birth=($3),
        graduation=($4),
        class_type=($5),
        services=($6)
      WHERE id = $7
    `;

    const values = [
      data.name,
      data.avatar_url,
      data.birth,
      data.graduation,
      data.class_type,
      data.services,
      data.id
    ];

    db.query(query, values, (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  },

  delete(id, callback) {
    db.query(`DELETE FROM teachers WHERE id = $1`, [id], (err, results) => {
      if (err) throw `Database error! ${err}`;

      return callback();
    });
  }
};