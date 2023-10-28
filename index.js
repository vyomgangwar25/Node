const dbconnect=require('./Mongodb'); //This line imports the dbconnect function from a file named 'Mongodb'. This function is assumed to be responsible for connecting to a MongoDB server and returning a collection that you can use to perform database operations.


const main=async()=>{
    let data=await dbconnect();  //This line calls the dbconnect function using await. The await keyword ensures that the function waits for the database connection to be established before continuing with the next instructions.
    data=await data.find().toArray(); //After connecting to the database, this line uses the find method to query the data in the collection. The toArray method is used to convert the result of the query into an array of documents. The result is then assigned to the data variable.
    console.log(data)
}
main();