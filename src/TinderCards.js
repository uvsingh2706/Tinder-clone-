import React from 'react'
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
// import database from './firebase';

function TinderCards() {

  const [people, setPeople] = useState([ 
    {  
      name: 'steve jobs',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQho7tP2OcHP_jwHaVk-JsAECLPGj9ap7MpA&usqp=CAU'
       // url: 'https://drive.google.com/open?id=1pSahkf7pMM39pS-QZnv8ybmplYdkrbYG&authuser=yuvraj40_soe%40jnu.ac.in&usp=drive_fs' 
    },
    {
        name: 'mark Zuckerberg',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMJsNyP_nTfBIkZWyL-5w0y9gf8g49RjLbA&usqp=CAU'
    },
    {
      name:  'Virat Kohli',
      url:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSPpnVHeTGIOFsae0RLwx1UcDUVpEvai-fg&usqp=CAU'
    },
    {
      name:  'Varun Dhawan',
      url:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnt8Hv86-pLKgJpL7nEIQTITncrUcCWpE4A&usqp=CAU'
    },
    {
      name:  'Kartik aryan',
      url:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLy_uvZfjkg-D1ae6xNfqSFiGy45QsruEl0g&usqp=CAU'
    }
    
  ]); //piece of code runs on conditions
//   useEffect (() => {
// //this is where the code runs.
//  const unsubscribe = database.collection('people').onSnapshot(snapshot => (
//     setPeople(snapshot.docs.map(doc => doc.data()))
//  ))
//  return () =>{
//      //this is  the clean up...
//      unsubscribe();
//  }
// //this code run once when the component loads, never again
//   }, [people])
  
  
  
  //it is some what same like const people = [];
//bad way
//people/push()('sunny', 'qazi')
//good way to push in react
//setPeople([..people, 'sunny', 'qazi'])

  return (
    <div>

      <h1>Tinder cards</h1>
      <div className="tindercards__cardcontainer">
                {people.map(person => (
                <TinderCard  className='swipe' key={person.name} preventSwipe={['up', 'down']}>
                    
                    <div className='card' style={{backgroundImage: `url(${person.url})`}}>
                    <h3>{person.name} </h3>

                    </div>
                </TinderCard>
            

            ))}
       </div>

    </div>
  )
}

export default TinderCards
