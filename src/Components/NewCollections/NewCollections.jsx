import React from 'react'
import '../NewCollections/NewCollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collection-item">
          {new_collection.map((item,i)=>{
            return  <Item  key={i} id={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}
        </div>
    </div>
  )
}

export default NewCollections