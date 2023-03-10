import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Catagory from './Catagory';

const Catagories = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://dream-shop-server.vercel.app/services')
            const data = res.json()
            return data
        }
    })

    return (
        <div className='container mx-auto'>
            <h4 className='text-2xl text-center mt-24'>Catagories</h4>
            <div className='w-16 h-[2px] bg-primary mx-auto mb-24 mt-2'></div>
            <div className='my-24 grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {
                    services.map(service => <Catagory key={service._id} service={service}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;