const fs = require('fs')



const getStudents = function(){
    console.log("Getting Students")
}
//Function adds the students
const addStudents = function(name,age,Class){
    const students = loadStudents();
    
    const duplicateData = students.filter(function(student){
        return student.name === name
    })
    
    if(duplicateData.length === 0){
        const students = loadStudents();
        students.push({
            name:name,
            age:age,
            Class:Class
        })
        saveStudents(students)
    }else{
        console.log("Record already in system.")
    }

}
//Function saves the students
const saveStudents = function(students){
    const stringData = JSON.stringify(students)
    fs.writeFileSync('students.json',stringData)
}
const removeStudent = function(name){
    console.log("Removing: "+name)

    const students = loadStudents();

    //Filter function iterate through our Students array and removes student by the condition being true. If student is in the array, remove.
    const newStudents = students.filter(function(student){
        return student.name !== name
    })

    saveStudents(newStudents);

    if(students.length> newStudents.length){
        console.log("Removed: "+name)
    }
    else{
        console.log("No such student found.")
    }
}

const loadStudents = function(){

    try {
        const dataBuffer = fs.readFileSync('students.json')
        const JSONdata = JSON.parse(dataBuffer.toString())
        return JSONdata
    } 
    catch (error) {
        return []
        
    }

}
const readStudent = function (name){
    const students = loadStudents()

    const foundStudent = students.find(student => student.name === name);


    console.log(foundStudent)
}

// console.log(loadStudents())

module.exports ={
    getStudents:getStudents,
    addStudents:addStudents,
    removeStudent:removeStudent,
    readStudent:readStudent,
    loadStudents:loadStudents
} 