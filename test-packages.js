try {
    require('dotenv');
    require('express');
    require('jsonwebtoken');
    require('mongodb');
    require('mongoose');
    require('mongoose-unique-validator');
    require('multer');
    require('sharp');
    console.log('Tous les packages ont été importés avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'importation des packages :', error.message);
  }