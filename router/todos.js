const router = require("express").Router();
const modal = require("../Schema/schema");
const {v4 : uuidv4} = require("uuid");

router.get("/", async(req,res) => {
    const data = await modal.find();
    res.status(200).json({status:200 , data});
})

router.post("/", async(req,res) => {
    const {todo} = req.body;
    const found = await modal.findOne({todo: todo});
    if(!found){
        await modal.create({
            todo ,
            id : uuidv4()
        });
        return res.status(201).json({status: 201 , message : "Added successfully"});
    }
     res.status(400).json({status : 400 , message : "todo already there"});
});

router.get("/:id", async(req,res) => {
    const {id} = req.params;
    const todo = await modal.findOne({id:id});
    if(!todo){
        return res.status(400).json({status:400 , message: "Id Not present!"})
    }
    res.status(200).json({status:200 , message: "Accessed successfully", todo})
})

router.patch("/:id", async(req,res) => {
    const {id} = req.params;
    const {todo} = req.body;
    const updated = await modal.findOneAndUpdate(
        {id : id}, 
        { $set :  {todo : todo}}, 
        {new : true}
    )
    if(!updated){
        return res.status(400).json({status : 400 , message : "Wrong Id"});
    }
    res.status(200).json({status: 200 , message : "Editted", updated});
})

router.delete("/:id", async(req,res) =>{
    const {id} = req.params;
    const deleted = await modal.findOneAndDelete(
        {id : id},
    )
    if(!deleted){
        return res.status(400).json({status:400 , message: "Id Not Present!"});
    }
    res.status(200).json({status: 200 , message : "Todo Deleted", deleted});
})

module.exports = router;