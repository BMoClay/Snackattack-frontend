import React from 'react'

function FavSnackItem({ stashItem, userId, favorites }) {

const { img, name, id } = stashItem;

console.log({favorites})

// const favoriteObj = {
//   favUserId: favorites.id,
//   snackId: favorites.snackId,
//   favoritesId: favorites.favoritesId
// }


let img_url = `http://[::1]:3001/${img}`

// How do we get favorites id? // 

function handleRemoveFavorite(id){
    fetch(`http://[::1]:3001/favorites/${id}`, {
           method: "DELETE"
       })
        .then(response => response.json())
        .then(data => {
           console.log(data)
        })
}

  return (
      <div>
           <h4>{name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleRemoveFavorite} >Remove from Stash</button>
            <hr />
      </div>
  );
}

export default FavSnackItem;