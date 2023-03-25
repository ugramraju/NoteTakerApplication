const express = require("express");
const noteSchema = require("../Models/NoteSchema");
const router = express.Router();

router.use(express.json())
router.post("/notes",(req,res)=>{
    const user = noteSchema.create(req.body)
    .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
   });
//Get 
router.get("/notes", (req, res) => {
    noteSchema.find()
      .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
  //Get
  router.get("/notes/:id",(req, res) => {
    noteSchema.find({_id:req.params.id})
      .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send("There Is No This Id");
      });
  });

  // Delete 
  router.delete("/notesDelete/:id", async (req, res) => {
    try {
      const data = await noteSchema.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(204).send(err);
    }
  });

  //update 
  router.put("/notesUpdate/:id", async (req, res) => {
    try {
      const data = await noteSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  

module.exports = router;