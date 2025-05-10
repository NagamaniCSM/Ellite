select * from degreetable;
select * from markstable;
insert into "degreetable" values(106,'ravi');
insert into "markstable" values(6, 107,'math',46);
insert into "markstable" values(7, 108,'eng',46);
select d.student_name,m.subjects,m.marks
from degreetable d inner join markstable m
on d.id=m.id;
select d.student_name,m.subjects,m.marks
from degreetable d left join markstable m
on d.id=m.id;
select d.student_name,m.subjects,m.marks
from degreetable d right join markstable m
on d.id=m.id;
select d.student_name,m.subjects,m.marks
from degreetable d full join markstable m on d.id=m.id;
select count(*) from markstable;
select count(*) as total_marks from markstable;
select sum(marks) from markstable;
select avg(marks) from markstable;
select min(marks) ,max(marks) from markstable;
select subjects ,avg(marks)
from markstable
group by subjects;
