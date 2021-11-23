SELECT cohorts.name as cohort_name, COUNT(assignment_submissions.*) AS total_submissions
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assignment_submissions ON student_id  = students.id
GROUP BY cohorts.name
ORDER BY total_submissions DESC;
