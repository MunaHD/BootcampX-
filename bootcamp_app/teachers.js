const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const values = [`${cohort || JUL02}`];

const sqlQuery = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts, COUNT(assistance_requests.*) as total_assistances
FROM assistance_requests 
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name
`

pool.query(sqlQuery, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohorts}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));
