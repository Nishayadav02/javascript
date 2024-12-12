const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor)
