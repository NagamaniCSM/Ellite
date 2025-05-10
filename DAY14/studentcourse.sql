create table students(
student_id int primary key,
student_name varchar(50)
);
select * from students;
create table courses(
course_id int primary key,
course_name varchar(50)
);
alter table students add column id int;
select * from courses;
update students set id=1 where student_id=1; 
update students set id=2 where student_id=2; 
update students set id=3 where student_id=3; 
update students set id=4 where student_id=4; 
update students set id=5 where student_id=5; 
insert into students values(1, 'reshma'),(2,'renu'),(3,'maggie'),(4,'vaishu'),(5,'mani');
INSERT INTO student_couse (student_id, course_id)
VALUES 
(1, 101),  -- Reshma → Java
(2, 102),  -- Renu → Python
(3, 103),  -- Maggie → Java
(4, 101),  -- Vaishu → Java
(5, 102);  -- Mani → Python

alter table students drop column id;
alter table courses drop column id;
insert into courses values(101,'java'),(102,'python'),(103,'c');
create table student_couse(
student_id int,
course_id int,
primary key (student_id,course_id),
foreign key (student_id) references students(student_id),
foreign key (course_id) references courses(course_id));
select * from student_couse;