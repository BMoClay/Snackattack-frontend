import React, { useState, useEffect } from 'react'
import FavSnackItem from './FavSnackItem'

function Stash({ user }) {

    const { id } = user;
    const [stash, setStash] = useState([])
    const [stashFavorites, setStashFavorites] = useState([])


    useEffect(() => {
        fetch(`http://[::1]:3001/users/${id}`) 
            .then(r => r.json())
            .then(data => {
                setStash(data.snacks);
                setStashFavorites(data.favorites);
            })
    }, [])

    // changed from favorites vs snacks

   console.log(stash)
   console.log(stashFavorites)
    
    let favoriteSnack = stash.map((stashItem) => {

        // console.log(stashItem)
            return <FavSnackItem 
            stashItem={stashItem} 
            key={stashItem.id} 
            userId={id}
            favorites={stashFavorites}
            />
        })

    return (
        <div>
         {favoriteSnack}
        </div>
    )

}

export default Stash;