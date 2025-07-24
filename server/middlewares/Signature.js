import JWT from 'jsonwebtoken'

const VerifySignature = async(req,res,next)=>{
    const signature = req.headers?.signature

    if(!signature){
        return res.status(4001).json({message:"Unauthorized request"})
    }
    const verify = JWT.verify(signature, process.env.signature)
    if(!verify){
        return res.status(401).json({message:'Signature not verified'})
    }
    next()
}

export {
    VerifySignature
}