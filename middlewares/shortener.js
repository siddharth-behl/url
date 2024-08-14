import express from "express"
export function urlencoder(){
    return express.urlencoded({extended:false})
}
export function urlmaker(req,res,next){
    let myurl=req.protocol + '://' + req.get('host')
    req.myurl=myurl
    next()
}
