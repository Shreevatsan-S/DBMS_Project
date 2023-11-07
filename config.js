const sqlite3 = require('sqlite3').verbose();
const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/crimeDB")
// .then(()=>{
//     console.log("heyyyy")
// })
//     .catch((err) => {
//         console.log(err)
//     })

const personSchema=new mongoose.Schema({
    id:Number,
    name:String,
    license_id:Number,
    address_number:Number,
    address_street_name:String,
    ssn:String
})

const incomeSchema=new mongoose.Schema({
    ssn:String,
    annual_income:Number

})

const licenseSchema=new mongoose.Schema({
    id:Number,
    age:Number,
    height:Number,
    eye_color:String,
    hair_color:String,
    gender:String,
    plate_number:String,
    car_make:String,
    car_model:String
})
const memberSchema=new mongoose.Schema({
    id:String,
    person_id:Number,
    name:String,
    membership_start_date:Number,
    membership_status:String

})
const interviewSchema=new mongoose.Schema({
    person_id:Number,
    transcript:String
})

const logSchema= new mongoose.Schema({
    membership_id :String,
    log:[{
        check_in_date: Number,
        check_in_time: Number,
        check_out_time: Number
    }]
})

const Person=mongoose.model("persons" , personSchema)
const Income=mongoose.model("incomes" , incomeSchema)
const License=mongoose.model("licenses" , licenseSchema)
const Member=new mongoose.model("get_fit_now_members" , memberSchema)
const Interview=new mongoose.model("interviews" , interviewSchema)
const Log=mongoose.model("get_fit_now_check_in" , logSchema)


const db=new sqlite3.Database("./sql-murder-mystery.db" , sqlite3.OPEN_READONLY , (err)=>{
    if(err){
        console.log(err)
    }
})
let x;

let sql=`SELECT membership_id FROM get_fit_now_check_in  GROUP BY membership_id `
let sql2=`select * from get_fit_now_check_in where membership_id = ${x}` 
// let sql=`SELECT * 
// FROM get_fit_now_check_in 
// WHERE membership_id IN 
//     (SELECT membership_id 
//      FROM get_fit_now_check_in 
//      GROUP BY membership_id 
//      HAVING COUNT(*) >= 1); and COUNT(*)>=1`
mongoose.connect("mongodb+srv://hrenukunta66:hitesh66@cluster0.pfx1ved.mongodb.net/crimeDB")
.then(()=>{
    console.log("heyyyy")
    db.all(sql , [] , (err , rows)=>{
        if(err){
            console.log("hii")
            console.log(err)
        }
        rows.forEach( (row)=>{
            // console.log(row)
            let sql2=`select * from get_fit_now_check_in where membership_id = "${row.membership_id}"` 
            // console.log(sql2)
            // x=row.membership_id
            db.all(sql2 , [] , (er,rows2)=>{
                if(er){
                    console.log(er)
                }
                
                // console.log(rows2)
                rows2.forEach((y)=>{
                    // console.log(y)

                    // let obj=new Log({
                    //     membership_id:y.membership_id,
                    //     log[]
                    // })
                })
                console.log("nexttttt")
            })
            // let obj=new Person({
            //     id:row.id,
            //     name:row.name,
            //     license_id:row.license_id,
            //     address_number:row.address_number,
            //     address_street_name:row.address_street_name,
            //     ssn:row.ssn
            // })
            // obj.save()
            // let obj=new Income({
            //     ssn:row.ssn,
            //     annual_income:row.annual_income
            // })
            // obj.save()
            // let obj=new License({
            //     id:row.id,
            //     age:row.age,
            //     height:row.height,
            //     eye_color:row.eye_color,
            //     hair_color:row.hair_color,
            //     gender:row.gender,
            //     plate_number:row.plate_number,
            //     car_make:row.car_make,
            //     car_model:row.car_model
            // })
            // obj.save()
            // let obj=new Member({
            //     id:row.id,
            //     person_id:row.person_id,
            //     name:row.name,
            //     membership_start_date:row.membership_start_date,
            //     membership_status:row.membership_status
            // })
            // obj.save()
            // let obj=new Interview({
            //     person_id:row.person_id,
            //     transcript:row.transcript
            // })
            // obj.save()
        })

    })
})
    .catch((err) => {
        console.log(err)
    })

