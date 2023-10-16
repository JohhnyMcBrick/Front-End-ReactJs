import axios from 'axios';

const GeneroScreen = () => {
  useEffect(() => {
    axios.get('/api/genero')
      .then((response) => {
        // Procesar la respuesta de la API
      })
      .catch((error) => {
        // Manejar errores
      });
  }, []);

  // Resto del código de la pantalla de Género
};
