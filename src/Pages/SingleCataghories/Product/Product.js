import React from 'react';
import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';



const Product = ({ phone, setBooking }) => {
    const { name, address, resellPrice, orginalPrice, img, ram, rom, stutas } = phone
    const { user } = useContext(AuthContext)
    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <img className='w-96' src={img} alt="Movie" />
            <div className="card-body">
                <div className="mt-12">
                    <h2 className="card-title mb-4">{name}</h2>
                    <p className='mb-2'>Orginal Price : {orginalPrice}</p>
                    <p className='mb-2'>Now price : {resellPrice}</p>
                    <p className='mb-2'>Address : {address}</p>
                    <p className='mb-2'>Ram : {ram}</p>
                    <p className='mb-2'>Rom: {rom}</p>
                    <p className='mb-2'>Seller Status: {
                        stutas && <FaCheck className='text-green-600 inline-block'></FaCheck>
                    }</p>
                    <div className="flex gap-1">
                        {
                            user ? <label aria-disabled htmlFor='bookingModal' onClick={() => setBooking(phone)} className="btn btn-primary">Booking Now</label> : <div><button className='btn btn-primary' disabled>Booking</button> please log in for Booking</div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;