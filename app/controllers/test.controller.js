

exports.dataBody = (req,res)=>{
    console.log(req.body);
    res.send(req.body);
}


exports.dataParams = (req,res)=>{
    console.log(req.params);
    res.send(req.params);
}

exports.dataQuery =(req,res)=>{
    console.log(req.query);
    res.send(req.query);
}
