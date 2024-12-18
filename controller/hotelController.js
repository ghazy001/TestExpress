const Hotel = require("../models/hotel");

async function add(req, res) {
    try {
        console.log("Request Body:", req.body); 
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(200).send(hotel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getall(req, res) {
    try {
        const data = await Hotel.find(); 
        res.status(200).send(data);
    } catch (err) {
        console.error("Error fetching hotels:", err); 
        res.status(400).json({ error: err.message });
    }
}

async function getById(req, res) {
    try {
        const data = await Hotel.findById(req.params.id);
        if (!data) {
            return res.status(404).send("Hotel not found");
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getByname(req, res) {
    try {
        let name = req.params.name;
        const data = await Hotel.findOne({ name });
        if (!data) {
            return res.status(404).send("Hotel not found");
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHotel) {
            return res.status(404).send("Hotel not found");
        }
        res.status(200).send("Updated");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function deleteHotel(req, res) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).send("Hotel not found");
        }
        res.status(200).send("Deleted");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function deleteAll(req, res) {
    try {
        await Hotel.deleteMany({});
        res.status(200).send("All hotels deleted");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getMax(req, res) {
    try {
        const minRooms = parseInt(req.query.minRooms) || 10; // Default to 10 if not provided
        const maxRooms = parseInt(req.query.maxRooms) || 100; // Default to 100 if not provided

        const data = await Hotel.find({ rooms: { $gte: minRooms, $lte: maxRooms } });
        res.status(200).send(data);
    } catch (err) {
        console.error("Error fetching hotels:", err);
        res.status(400).json({ error: err.message });
    }
}

module.exports = { add, getall, getById, getByname, update, deleteHotel, deleteAll,getMax };