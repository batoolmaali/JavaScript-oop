 class Teacher extends Student{
     constructor(Id, Name, Email, mobile_number,Salary,subjects){
      super(Id, Name, Email, mobile_number)
      this.Salary =Salary;
      this.subjects=subjects;
}}
let Teacher1 = new Teacher (96432,'Sadi','Sadi@orange.com','077778888', 800,['English','Arabic', 'Math','science'])

console.log(Teacher1);

