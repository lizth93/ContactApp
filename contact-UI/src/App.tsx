import { useEffect } from 'react';
import './App.css';
import fetchContact from './api/fetchContacts';

function App() {

  useEffect(() => {
    async function getContacts() {
      const data = await fetchContact()
      console.log(data, "data luz ")
    }
    getContacts()
  }, [])

  return (
    <div className="container">
      <h1>Mi Aplicación con Bootstrap</h1>
      <button className="btn btn-primary">Botón de Bootstrap</button>
      <div className="alert alert-success" role="alert">
        Este es un mensaje de éxito.
      </div>
    </div>
  );
}

export default App;
