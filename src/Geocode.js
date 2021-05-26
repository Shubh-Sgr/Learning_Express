const request = require("postman-request")

const geocode=(address,callback)=>
{
    setTimeout(()=>{
        const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1Ymgtc2FnYXIiLCJhIjoiY2tvOGZyZzE0MDA4MjJubXNscGN5ZTFkbSJ9.nlFLMgXJeg1XlBa7DSZCRg&&limit=1"
        request({url:url,json:true},(err,res)=>{
            
            if (err)
            {
                callback("UnaUnable to connect",undefined)
            }
            else if (res.body.features.length==0)
            {
                callback("Query is not written properly",undefined)
            }
            else
            {
                callback(undefined,
                    {
                         lat:res.body.features[0].center[0],
                         long:res.body.features[0].center[1],

                    })
            }
        })
    },2000)
}
module.exports=geocode