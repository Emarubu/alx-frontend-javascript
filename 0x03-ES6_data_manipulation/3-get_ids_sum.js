function getStudentIdsSum(students){
    if (!Array.isArray(students)) {
        return 0; // Return 0 if the students argument is not an array
      }
      return students.reduce((sum, student) => sum + student.id, 0);
}