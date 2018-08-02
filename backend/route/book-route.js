const Book = require('../schema/booking-schema').Book;

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.send("API homepage");
    });

    app.get("/schedules", (req, res) => {
        Book.find({}, (err, booking) => {
            if (err)
                return res.send(err);

            res.json(booking);
        });
    });

    app.get("/schedules/:name", (req, res) => {
        Book.find({
            "name": req.params.name
        }, (err, booking) => {
            if (err)
                return res.send(err)

            res.json(booking);
        });
    });

    app.get("/schedules/:date", (req, res) => {
        Book.find({
            "time": req.params.time
        }, (err, booking) => {
            if (err)
                return res.send(err)

            res.json(booking);
        });
    });

    app.post("/schedules/add", (req, res) => {
        let newSchedule = new Book();
        newSchedule.name = req.body.name;
        newSchedule.phone = req.body.phone;
        newSchedule.date = req.body.date;
        newSchedule.time = req.body.time;
        newSchedule.from = req.body.from;
        newSchedule.destination = req.body.destination;
        newSchedule.ferry_name = req.body.ferry_name;

        newSchedule.save((err, booking) => {
            if (err)
                return res.send(err)

            res.json({
                "status": "New schedule added",
                "data": booking
            });
        });
    })

    app.put("/schedules/update", (req, res) => {
        Book.findById(req.body.id, (err, newSchedule) => {
            if (err)
                return res.send(err);
            newSchedule.name = req.body.name;
            newSchedule.phone = req.body.phone;
            newSchedule.date = req.body.date;
            newSchedule.time = req.body.time;
            newSchedule.from = req.body.from;
            newSchedule.destination = req.body.destination;
            newSchedule.ferry_name = req.body.ferry_name

            newSchedule.save((err, booking) => {
                if (err)
                    return res.send(err)

                res.json({
                    'Status': 'Updated',
                    "data": booking
                })
            })
        })
    })

    app.delete("/schedules/delete/:id", (req, res) => {
        Book.findById(req.params.id, (err, newSchedule) => {
            if (err)
                return res.send(err)
            newSchedule.remove((err) => {
                if (err)
                    return res.send(err)
                res.json({
                    'Status': 'Deleted'
                })
            })
        })
    })
}