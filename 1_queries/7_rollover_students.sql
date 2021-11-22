SELECT students.name as student_name, students.start_date as student_start, cohorts.name as cohort_name, cohorts.start_date as cohort_start
FROM students 
JOIN cohorts ON cohort_id = cohorts.id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohorts.start_date;
