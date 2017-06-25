var mongodb=require('mongodb')
var server=new mongodb.Server('127.0.0.1',27017,{auto_reconnect:true})
var db=new mongodb.Db('yx',server,{safe:true})
var arr=[];
var str=''
db.open(function(err,db){
	if(err){
		
	}else{
		
		db.collection('yx',{safe:true},function(err,conn){              
			if(err){
				
			}else{
				conn.find({}).toArray(function(err,data){
					if(err){
						
					}else{
					    data.map(function(item){
					    	arr.push(item);
					    })
					}
				})
				
			}
		})
	}
})
var http=require('http')
http.createServer((req,res)=>{
								res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'})
								if(req.url!='/favicon.ico'){
								  arrs=JSON.stringify(arr);
									res.write(arrs)
									res.end()
								}
							}).listen(3000)
