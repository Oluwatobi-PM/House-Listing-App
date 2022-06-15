import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, limit, startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import Spinner from '../Components/Spinner'
import ListingItem from '../Components/ListingItem'

function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        const fetchListings = async () => {
            try {
                //Get reference
                const listingsRef = collection(db, 'listings')
                // Create a query
                const q = query(
                    listingsRef, 
                    where('type', '==', params.categoryName),
                    limit(10)
                )
                // Execute query
                const querySnap = await getDocs(q)
                    
                let listings = []    

                querySnap.forEach((doc) => {
                   return listings.push({
                    id: doc.id,
                    data: doc.data()
                   })
                })

                setListings(listings)
                setLoading(false)
            } catch (e) {
                toast.error('Could not fetch listings')
            }
        }

        fetchListings()
    }, [params.categoryName])

  return (
    <div className='category'>
        <header>
            <p className='pageHeader'>
               {params.categoryName === 'rent' ? 'Places for rent': 'Places for sale'} 
            </p>
        </header>
        {loading? 
            (<Spinner />) : 
            listings && listings.length > 0 ? (
            <>
             <main>
                <ul className="categoryListings">
                    {listings.map((listing) => (
                       <ListingItem 
                        listing={listing.data} 
                        id={listing.id}
                        key={listing.id} />
                    ))}
                </ul>
             </main>
            </>) : (
            <p>No listings for {params.categoryName}</p>)}
    </div>
  )
}

export default Category