import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const MyToys = () => {

document.title = "Wonder Spark toys | My Toys";

  const [myToys, setMyToys]= useState([]);


  const navigate = useNavigate();
  const location = useLocation();

  const { user,useremail } = useContext(AuthContext);
// userEmail ||  user.email

    const email = useremail ||  user.email;

    const handleSort=()=>{
      fetch(`https://wonder-eight.vercel.app/sort/data/${email}`)
        .then(res=>res.json())
        .then(result =>setMyToys(result))
      }
      

const handleDelete=(id)=>{

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {

fetch(`https://wonder-eight.vercel.app/myToys/${id}`,{
    method:"DELETE"
}).then(res=>res.json())
.then(result=>{
    if(result.deletedCount > 0){
  swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your toy has been deleted.',
        'success'
      )}
})

    } else if (
     
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your toy is safe :)',
        'error'
      )
    }
  })
}

useEffect(()=>{
    fetch(`https://wonder-eight.vercel.app/myToys/${email}`)
    .then(res=>res.json())
    .then(result =>setMyToys(result))
},[])

    return (
        <>
            <h2 className='mt-5 mb-5 bg-light py-5 text-center text-info text-center '>My Toys</h2>
           <div className='text-center'>
           <button onClick={handleSort} className='btn btn-info text-white'>Sort</button>
           </div>
            <table className="container mb-5 mx-auto table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Seller</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Category</th>
            <th scope="col">Available</th>
            <th scope="col">Price</th>
            <th scope="col">View Details</th>
            <th scope="col">Edit Toys</th>
            <th scope="col">Delete Toys</th>
          </tr>
        </thead>
        <tbody>
        {myToys.map((toy, i) => {
            return (
              <tr key={toy._id}>
                <td>{i + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.toyCategory}</td>
                <td>{toy.toyQuantity}</td>
                <td>{toy.toyPrice}</td>
                <td>
                <Link to={`/viewSingleToy/${toy._id}`}>
                <button className="btn btn-info text-white">
                      View Details
                    </button>
                </Link> 
                </td>
                <td>
                <Link to={`/updateToys/${toy._id}`}><button className="btn btn-warning text-white">
                      Edit
                    </button></Link>
                </td>
                <td>
                <button className="btn btn-danger text-white"
                onClick={()=>handleDelete(toy._id)}
                >Delete
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </>
    );
};

export default MyToys;