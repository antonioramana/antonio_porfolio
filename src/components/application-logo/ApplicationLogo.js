import React from 'react';
import { logo } from '../../assets/index'; // Assurez-vous que votre image est bien importée

const ApplicationLogo = () => {
  return (
    <div className="flex items-center space-x-3"> {/* Ajout d'espace entre l'image et le texte */}
      {/* Image arrondie avec ombre douce et bordure subtile */}
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
      />
      {/* Texte stylisé avec bordure et ombre pour effet visuel */}
      <span className="text-white font-semibold text-lg border-b-4 border-gray-400 px-4 py-2 -ml-2 rounded-r-lg shadow-md hover:shadow-xl transition duration-300">
        Antonio Ram
      </span>
    </div>
  );
}

export default ApplicationLogo;
