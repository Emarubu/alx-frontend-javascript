function getListStudentIds(student){
    if(!Array.isArray(student)){
        return student = [];
    }
        return student.map(student => student.id);
    }
