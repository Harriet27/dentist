const { db } = require('../database/connection');

module.exports = {
    getAll: (req,res) => {
        let get = `SELECT * FROM sunday`;
        db.query(get, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send({
                status: `Success`,
                data: results,
                message: `All data fetched`,
            });
        });
    },
    createMeet: (req,res) => {
        let { id } = req.params;
        let { name } = req.body;
        let create = `UPDATE sunday SET name = '${name}' WHERE id = ${id}`;
        db.query(create, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            let get = `SELECT * FROM sunday WHERE id = ${id}`;
            db.query(get, (err,results) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                res.status(200).send({
                    status: `Success`,
                    data: results,
                    message: `Appointment made`,
                });
            });
        });
    },
    clearMeet: (req,res) => {
        let { id } = req.params;
        let clear = `UPDATE sunday SET name = null WHERE id = ${id}`;
        db.query(clear, (err,results) => {
            if (err) {
                res.status(500).send(err.message);
            }
            let get = `SELECT * FROM sunday WHERE id = ${id}`;
            db.query(get, (err,results) => {
                if (err) {
                    res.status(500).send(err.message);
                }
                res.status(200).send({
                    status: `Success`,
                    data: results,
                    message: `Appointment cleared`,
                });
            });
        });
    },
};
