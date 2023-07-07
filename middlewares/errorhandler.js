const logErrors = (err, req,res,next)=>{
  console.log(err.message);
  next(err);
}
const errorHandler = (err, req,res,next)=>{
  res.status(500).json({
    message: err.message,
    stack:err.stack
  })
}

module.exports={logErrors,errorHandler}
