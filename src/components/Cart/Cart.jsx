import React from 'react';
import { MdDelete } from "react-icons/md";

const Cart = ({ cart, handleDelete }) => {


    return (
        <div className='w-xl'>
            <div className='shadow-sm'>
                <h3 className='text-center text-2xl'>Want to cook: {cart.length}</h3>
                <div>
                    <div>
                        <ul className='flex justify-evenly text-xl'>
                            <li>Name</li>
                            <li>Time</li>
                            <li>Calories</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <ul>
                    {
                        cart.map((item, index) => (
                            <div className="flex justify-evenly p-2 text-xl">
                                <p>{index+=1}</p>
                                <li>{item.recipe_name.slice(0, 15)}</li>
                                <li>{item.preparing_time.slice(0, 7)}</li>
                                <li>{item.calories}</li>
                                <button onClick={()=>handleDelete(item.recipe_id)}><MdDelete /></button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    );
};

export default Cart;