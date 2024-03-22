import React, { useState } from 'react';

const Lista = () => {
  // Estado para controlar si la lista está visible o no
  const [isListVisible, setIsListVisible] = useState(false);

  // Función para alternar la visibilidad de la lista
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <h2>Ejemplo de Componente</h2>
      <p>Este es un ejemplo de un componente de React que incluye varios elementos y funcionalidades.</p>

      {/* Botón para alternar la visibilidad de la lista */}
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
      </button>

      {/* Lista de elementos */}
      {isListVisible && (
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      )}
    </div>
  );
};

export default Lista;
