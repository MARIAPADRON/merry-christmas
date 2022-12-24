import { useState } from 'react';
import users from '../data/users.json'


const Users = () =>{
    const randomUser = Math.floor(Math.random()*users.length);
    const [index, setIndex] =useState(randomUser);
    const changeUser = ()=>{
        const newUser =  Math.floor(Math.random()*users.length)
        setIndex (newUser)
    }
    const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ];
    const randomColor = Math.floor(Math.random()*colors.length);
    document.body.style = `background:${colors[randomColor]}`
   
    return (
        <div className='container-component'>         
        <div className="conteiner-user" style={{color:colors[randomColor]}}>    
            <h1>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>
            <img src={users[index].picture.medium} alt="" />
            <h3> <i class="fa-solid fa-envelope"></i> {users[index].email}</h3>
            <h3> <i class="fa-solid fa-phone"></i> {users[index].phone}</h3>
            <h3> <i class="fa-solid fa-location-dot"></i> {users[index].location.city} {users[index].location.state} {users[index].location.country}</h3>
        </div>
        <button onClick={changeUser} style={{color:colors[randomColor]}}> <i class="fa-solid fa-shuffle"></i> </button>
        </div>
    )
}
export default Users