import React from 'react'
import Layout from '../components/shared/Layout'
import Switch from '@mui/material/Switch'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="py-3 bg-gray-200">
                <button
                    className="border border-black rounded p-3 block m-auto bg-white hover:bg-black hover:text-white"
                    onClick={() => navigate('/productadd')}
                >
                    Add Product
                </button>
            </div>
            <div className="px-4">
                <h1 className="my-4">Products</h1>
                <div className="rounded flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                        <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className='flex gap-3 my-2'>
                            <h2>price : 2000</h2> 
							<h2>mrp : 3000</h2>
                        </div>
                        <h1 className='flex gap-3 my-2'>product type</h1>

                        <div className="flex gap-4 pt-3">
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>

                <div className="rounded flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                        <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className='flex gap-3 my-2'>
                            <h2>price : 2000</h2> 
							<h2>mrp : 3000</h2>
                        </div>
                        <h1 className='flex gap-3 my-2'>product type</h1>

                        <div className="flex gap-4 pt-3">
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>

				<div className="rounded flex py-6 my-4 bg-gray-200">
                    <div className="w-32 sm:w-36 md:w-48 flex justify-center items-center">
                        <div className="rounded-full h-28 w-24 bg-white"></div>
                    </div>
                    <div className=" flex-1">
                        <h1>Title</h1>
                        <div className='flex gap-3 my-2'>
                            <h2>price : 2000</h2> 
							<h2>mrp : 3000</h2>
                        </div>
                        <h1 className='flex gap-3 my-2'>product type</h1>

                        <div className="flex gap-4 pt-3">
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Edit
                            </button>
                            <button className="p-3 border border-black rounded bg-white hover:bg-black hover:text-white">
                                Delete
                            </button>
                            <Switch {...label} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
