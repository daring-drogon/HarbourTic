const Book = require('../schema/booking-schema').Book;

module.exports = function (app) {
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

    app.post("schedules/add", (req, res) => {
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
}