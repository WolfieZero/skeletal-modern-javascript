const boom = animal => {
    console.log('Boom!', animal.charAt(0).toUpperCase() + animal.slice(1));
};

boom('chinchilla');
