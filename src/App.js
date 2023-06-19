import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    grade: '',
    cedula:'',
    curso:'',
  });

  const addStudent = () => {
    if (
      newStudent.firstName.trim() !== '' &&
      newStudent.lastName.trim() !== '' &&
      newStudent.subject.trim() !== '' &&
      newStudent.grade.trim() !== '' &&
      newStudent.cedula.trim() !== '' &&
      newStudent.curso.trim() !== ''
    ) {
      setStudents([...students, newStudent]);
      setNewStudent({
        firstName: '',
        lastName: '',
        subject: '',
        grade: '',
        cedula: '',
        curso: '',
      });
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
      <img src= {logo} className='App-logo' alt='logo'/>
      <h1>Control de Rendimiento Académico</h1>
      <div>
        <input
          type="text"
          value={newStudent.firstName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, firstName: e.target.value })
          }
          placeholder="Nombres"
        />
        <input
          type="text"
          value={newStudent.lastName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, lastName: e.target.value })
          }
          placeholder="Apellidos"
        />
        <input
          type="text"
          value={newStudent.cedula}
          onChange={(e) =>
            setNewStudent({ ...newStudent, cedula: e.target.value })
          }
          placeholder="Cédula"
        />
        <input
          type="text"
          value={newStudent.curso}
          onChange={(e) =>
            setNewStudent({ ...newStudent, curso: e.target.value })
          }
          placeholder="Curso"
        />
        <input
          type="text"
          value={newStudent.subject}
          onChange={(e) =>
            setNewStudent({ ...newStudent, subject: e.target.value })
          }
          placeholder="Asignatura"
        />
        <input
          type="number"
          value={newStudent.grade}
          onChange={(e) =>
            setNewStudent({ ...newStudent, grade: e.target.value })
          }
          placeholder="Calificación"
        />
        <button onClick={addStudent}>Agregar Estudiante</button>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.firstName} {student.lastName}</strong>
            <br />
            Cédula: {student.cedula}
            <br />
            Curso: {student.curso}
            <br />
            Asignatura: {student.subject}
            <br />
            Calificación: {student.grade}
        
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
