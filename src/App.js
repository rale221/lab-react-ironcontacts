import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';



console.log(contacts)

function App() {
  let localContacts = [...contacts]
  const [stateCelebs, setStateCelebs] = useState(localContacts.splice(0, 5))
  const [otherCelebs, setOtherCelebs] = useState(localContacts)

  const deleteContact = (i) => {
    let newArr = [...stateCelebs]
    newArr.splice(i, 1)
    setStateCelebs(newArr)
    console.log('delete')
  }
  const ShowFive = () => {
    return stateCelebs.map((eachContact, i) => {
      return <li key={i}><img src={eachContact.pictureUrl} /> {eachContact.name} {eachContact.popularity} <button onClick={() => deleteContact(i)}>deleteContact</button></li>
    })
  }

  const addRandom = () => {
    if (otherCelebs.length <= 0) {
      return
    }

    console.log('hello')
    let randomN = Math.floor(Math.random() * otherCelebs.length)
    let tempCelebs = [...stateCelebs]
    let tempAllCelebs = [...otherCelebs]
    tempCelebs.unshift(tempAllCelebs[randomN])
    tempAllCelebs.splice(randomN, 1)
    setStateCelebs(tempCelebs)
    setOtherCelebs(tempAllCelebs)
  }


  const sortByName = () => {
    let newArr2 = [...stateCelebs]
    newArr2.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })



    setStateCelebs(newArr2)
    console.log('whatever')
  }

  const sortByPopularity = () => {
    let newArr = [...stateCelebs]
    newArr.sort((a, b) => {

      return b.popularity - a.popularity
      //  if(a.popularity < b.popularity){
      //    return 1
      //  }
      //  if(a.popularity > b.popularity){
      //    return -1
      //  }
      //  if(a.popularity == b.popularity){
      //    return 0
      //  }

    })

    setStateCelebs(newArr)
  }

  return (
    <div>
      <button onClick={addRandom}>Add Random Actor</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      {/* {showFive()} */}
      <ShowFive />
    </div>
  )
}

export default App;