import React from 'react';
import './styles.css'


export const CourseForms = () => {
  return (
    <div className='container-forms'>

    <form action="" className='course-forms'>
      <legend>Registre seu curso</legend>
      <label htmlFor="coursename">Nome do curso</label>
      <input type="text" id="coursename" name="coursename" />
      <label htmlFor="teachername">Nome do professor</label>
      <input type="text" id="teachername" name="teachername" />
      <label htmlFor="category">Categoria</label>
      <select name="category" id="category">
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="database">Database</option>
        <option value="softskills">Softskills</option>
      </select>
      <label htmlFor="description">Descrição</label>
      <textarea id="description" name="description" rows="10"></textarea>
      <label htmlFor="courseimage">Capa do curso</label>
      <input type="file" id="courseimage" name="courseimage" accept="image/png, image/gif, image/jpeg" />
      <button>Enviar Curso</button>
    </form>
    </div>
  );
};

