// import React from 'react';
// import './App.css';
// import img from './Image/skectimage.jpg';
// function App() {
//   return (
//     <>
//     <div className='title'>
//     <h1>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
//     </div>
//     <div className='text'>
//     <h2>POOJA S</h2>
//         <h2>CSE CYBER SECURITY</h2>
//         <img src={img} alt='SKCET'></img>
//         <p>For more info <a target="blank" href="https://www.skcet.ac.in/">www.skcet.com</a></p>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/JVK5rQ_gX6w?si=_X13Ja1ilQf_Nexc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//         <p><u>Available top depts in SKCET:</u></p>
//         <ol>
//             <li>CSE</li>
//             <li>IT</li>
//             <li>CYS</li>
//             <li>CSD</li>
//         </ol>
//         <ul>
//             <li>CSBS</li>
//             <li>MTECH CSE</li>
//             <li>ECE</li>
//             <li>EEE</li>
//         </ul>
//         <p>Emerging department of the year</p>
//         <dl>
//             <dt>CYS</dt>
//             <dd>Aim to build ethical cyber hackers for future...Cybersecurity is important because it helps to protect sensitive information and assets from being compromised by hackers and cybercriminals. </dd>
//         </dl>
//         <h1>parent to child binding</h1>
//         </div>
        
//         </>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { fetchUsers } from './Compo/Axios';
// const UsersComponent = () => {
// const [users, setUsers] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState('');
// useEffect(() => {
// const loadUsers = async () => {
// try {
// setLoading(true);
// const data = await fetchUsers();
// setUsers(data);
// setLoading(false);
// } catch (error) {
// setError('Failed to fetch users');
// setLoading(false);
// }
// };
// loadUsers();
// }, []);
// return (
// <div>
// <h1>Users</h1>
// {loading && <p>Loading...</p>}
// {error && <p>{error}</p>}
// {!loading && !error && (
// <ul>
// {users.map((user,i) => (
// <li key={i}>{user.username}</li>
// ))}
// </ul>
// )}
// </div>
// );
// };
// export default UsersComponent;
import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;