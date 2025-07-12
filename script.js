document.addEventListener('DOMContentLoaded', () => {
  // Attendance
  const attendanceForm = document.getElementById('attendanceForm');
  const recordList = document.getElementById('recordList');
  attendanceForm?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    const date = document.getElementById('date').value;
    const status = document.querySelector('input[name="status"]:checked').value;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${name} — ${date} — ${status}`;
    recordList.append(li);
    attendanceForm.reset();
  });

  // Assignments
  const assignmentForm = document.getElementById('assignmentForm');
  const assignmentList = document.getElementById('assignmentList');
  assignmentForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('assignTitle').value.trim();
    const date = document.getElementById('dueDate').value;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${title} — Due: ${date}`;
    assignmentList.append(li);
    assignmentForm.reset();
  });

  // Grades
  const gradeForm = document.getElementById('gradeForm');
  const gradeList = document.getElementById('gradeList');
  gradeForm.addEventListener('submit', e => {
    e.preventDefault();
    const info = document.getElementById('studentSubject').value.trim();
    const grade = document.getElementById('gradeValue').value;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${info} — Grade: ${grade}`;
    gradeList.append(li);
    gradeForm.reset();
  });
});
