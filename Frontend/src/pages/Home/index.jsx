import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromDatabase = await api.get('/users');
    setUsers(usersFromDatabase.data);
    console.log(users);
  }

  useEffect(() => {
    getUsers()
  }, [])

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    getUsers();
  }

  async function deleteUser(id) {
    await api.delete(`/users/${id}`);

    getUsers();
  }

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de usuário</h1>
        <input placeholder="Nome" name='nome' type="text" ref={inputName} />
        <input placeholder="Idade" name='idade' type="number" ref={inputAge} />
        <input placeholder="E-mail" name='email' type="email" ref={inputEmail} />

        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>
      {users.map(user => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome: <span> {user.name} </span></p>
            <p>Idade: <span> {user.age} </span></p>
            <p>E-mail: <span> {user.email} </span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
