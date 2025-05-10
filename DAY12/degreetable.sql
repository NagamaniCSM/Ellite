select * from degreetable;
insert into "degreetable" values(101,'mani');
insert into "degreetable" values(102, 'reshma');
insert into "degreetable" values(103, 'vaishu');
select name from "degreetable";
select * from "degreetable" where name='mani';
update "degreetable" set name='nagamani' where id=101;
delete from "degreetable" where id=103;
select * from "degreetable" order by id asc;
select * from "degreetable" order by name desc;
select * from "degreetable" where id>101;
alter table "degreetable" rename column name to student_name;
create table subjects (
id int primary Key,
names varchar(50)
);
select * from subjects;
alter table subjects rename to details;
select * from details;