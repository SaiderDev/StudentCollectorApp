const yargs = require('yargs') 
const studentUtils = require("./students")
   
// Customize yargs version 
yargs.version('1.1.0') 
   
// console.log(process.argv)

//Yargs allows us to create a command in the terminal.Create a command for adding,listing and reading a student


yargs.command({
    command:"add",
    description:"Adding a student",
    builder:{
        name:{
            describe:"Takes the student's fullname",
            demandOption:true,
            type:'string'
        },
        class:{
            describe:"Takes the student's class",
            demandOption:true,
            type:'number'
        },
        age:{
            describe:"Takes the student's age",
            demandOption:true,
            type:'number'
        }
    },
    handler:function(argv){
        console.log("Adding a student "+argv.name +" Age: "+argv.age+" Class: "+argv.class)
        studentUtils.addStudents(argv.name,argv.age,argv.class)
    }
})
yargs.command({
    command:"remove",
    description:"Removing a student",
    builder:{
        name:{
            describe:"Takes the student's fullname",
            demandOption:true,
            type:'string'
        }   
    },
    handler:function(argv){
        
        studentUtils.removeStudent(argv.name)
    }

})
yargs.command({
    command:"list",
    description:"Listing a student",
    handler:function(){
        console.log("Listing a student")
    }
})
yargs.command({
    command:"read",
    description:"Reading a student",
    builder:{
        name:{
            describe:"Takes the student's fullname",
            demandOption:true,
            type:'string'
        } 
    },
    handler:function(argv){
        console.log("Reading a student")
        studentUtils.readStudent(argv.name)
    }
})

yargs.argv
// studentUtils.getStudents()
