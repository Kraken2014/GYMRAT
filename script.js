document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const tableBody = document.getElementById('exercise-table-body');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Obtener valores del formulario
      const name = document.getElementById('exercise-name').value;
      const reps = document.getElementById('reps').value;
      const sets = document.getElementById('sets').value;
      const weight = document.getElementById('weight').value;
  
      // Crear nueva fila en la tabla
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${reps}</td>
        <td>${sets}</td>
        <td>${weight}</td>
      `;
  
      tableBody.appendChild(row);
  
      // Limpiar formulario
      form.reset();
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const tableBody = document.getElementById('exercise-table-body');
    const routineForm = document.getElementById('routine-form');
    const routineList = document.getElementById('routine-list');
    const routineExercises = document.getElementById('routine-exercises');
    const exercises = []; // Lista de ejercicios
  
    // Registrar ejercicios
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('exercise-name').value;
      const reps = document.getElementById('reps').value;
      const sets = document.getElementById('sets').value;
      const weight = document.getElementById('weight').value;
      const date = new Date().toLocaleDateString(); // Fecha actual
  
      const exercise = { name, reps, sets, weight, date };
      exercises.push(exercise);
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${reps}</td>
        <td>${sets}</td>
        <td>${weight}</td>
        <td>${date}</td>
      `;
      tableBody.appendChild(row);
  
      // Actualizar el selector de ejercicios en rutinas
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      routineExercises.appendChild(option);
  
      form.reset();
    });
  
    // Crear rutina
    routineForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const routineName = document.getElementById('routine-name').value;
      const selectedOptions = Array.from(routineExercises.selectedOptions).map(opt => opt.value);
  
      if (selectedOptions.length === 0) {
        alert('Por favor selecciona al menos un ejercicio.');
        return;
      }
  
      const routine = {
        name: routineName,
        exercises: selectedOptions,
      };
  
      // Mostrar rutina
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${routine.name}</strong>: ${routine.exercises.join(', ')}
      `;
      routineList.appendChild(listItem);
  
      routineForm.reset();
    });
  });
  