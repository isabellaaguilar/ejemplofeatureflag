import React, { useState } from 'react';
import { useFeatureFlag } from '../react-feature-flags';
import flags from '../flags'; // Importa tus flags desde el archivo correspondiente

const FeatureComponent: React.FC = () => {
  // Utilizamos useState para mantener el estado de la nueva característica
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(flags.newFeature);

  // Función para alternar el estado de la característica
  const toggleFeature = () => {
    setIsFeatureEnabled(!isFeatureEnabled); // Invierte el estado actual
  };

  return (
    <div>
      {isFeatureEnabled ? (
        <p>La nueva característica está habilitada.</p>
      ) : (
        <p>La nueva característica está deshabilitada.</p>
      )}

      {/* Botón para alternar el estado de la característica */}
      <button onClick={toggleFeature}>
        {isFeatureEnabled ? 'Deshabilitar' : 'Habilitar'} Nueva Característica
      </button>
    </div>
  );
};

export default FeatureComponent;
