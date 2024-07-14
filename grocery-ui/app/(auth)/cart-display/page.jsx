import React from 'react'

function page() {
  return (
    <div class="bg-white h-screen md:h-full">
        <div class="flex md:w-1/6 w-full flex-col shadow-lg shadow-gray-400 h-screen bg-white md:right-0 md:fixed top-20 md:top-0">
            <div class="flex gap-8 w-100 p-2 border-b-2 mt-28 md:mt-20">
                <img class="w-16 h-16  border-2 rounded-lg" src="cauliflower.webp" alt="" />
                <div>
                    <h3 class="font-semibold">Cauliflower</h3>
                    <p class="text-sm text-gray-500">Quantity 1</p>
                    <h3 class="font-semibold">₹30</h3>
                </div>
            </div>
            <div class="flex gap-8 w-100 p-2 border-b-2">
                <img class="w-16 h-16  border-2 rounded-lg" src="egg.jpg" alt="" />
                <div>
                    <h3 class="font-semibold">Eggs</h3>
                    <p class="text-sm text-gray-500">Quantity 1</p>
                    <h3 class="font-semibold">₹49</h3>
                </div>
            </div>
            <div class="flex gap-8 w-100 p-2 border-b-2">
                <img class="w-16 h-16  border-2 rounded-lg" src="apple.jpg" alt="" />
                <div>
                    <h3 class="font-semibold">Apple</h3>
                    <p class="text-sm text-gray-500">Quantity 1</p>
                    <h3 class="font-semibold">₹180</h3>
                </div>
            </div>
            <div class="flex md:justify-between justify-space-around text-2xl md:top-[38rem] md:bottom-20 p-3 w-full absolute top-1">
                <h3>Subtotal:</h3>
                <h3 class="font-bold text-4xl">₹259</h3>
            </div>
            <button class="p-3 mx-auto w-full absolute top-12 md:top-[43rem] md:bottom-10 bg-green-600 text-white font-medium hover:bg-green-700">PLACE ORDER</button>



        </div>
        <div class="flex flex-col gap-1">
            <div class="text-4xl bg-green-600 text-white font-bold py-5 px-16">
                <h1>MY CART</h1>
            </div>
            <div class="flex w-5/6 p-8 hidden md:block">
                <div class="grid grid-cols-4 gap-4 ">
                    <div class="flex flex-col shadow-lg shadow-gray-400 rounded-lg p-3 ">
                        <img class="p-4 mx-auto my-2 w-[15rem] border-2 border-gray-200 rounded-lg h-[15rem]" src="cauliflower.webp" alt=""/>
                        <h3 class="font-bold text-center text-xl text-gray-800">Cauliflower</h3>
                        <p class="text-center text-lg font-bold text-gray-800">₹30</p>
                        <button class="bg-blue-400 text-white p-4 mx-9 rounded-lg font-medium hover:bg-blue-500">REMOVE FROM CART</button>
                    </div>
                    
                    <div class="flex flex-col shadow-lg shadow-gray-400 rounded-lg p-3 ">
                        <img class="p-4 mx-auto my-2 w-[15rem] border-2 border-gray-200 rounded-lg h-[15rem]" src="egg.jpg" alt=""/>
                        <h3 class="font-bold text-center text-xl text-gray-800">Eggs</h3>
                        <p class="text-center text-lg font-bold text-gray-800">₹49</p>
                        <button class="bg-blue-400 text-white p-4 mx-9 rounded-lg font-medium hover:bg-blue-500">REMOVE FROM CART</button>
                    </div>
                    
                    <div class="flex flex-col shadow-lg shadow-gray-400 rounded-lg p-3 ">
                        <img class="p-4 mx-auto my-2 w-[15rem] border-2 border-gray-200 rounded-lg h-[15rem]" src="apple.jpg" alt=""/>
                        <h3 class="font-bold text-center text-xl text-gray-800">Apple</h3>
                        <p class="text-center text-lg font-bold text-gray-800">₹180</p>
                        <button class="bg-blue-400 text-white p-4 mx-9 rounded-lg font-medium hover:bg-blue-500">REMOVE FROM CART</button>
                    </div>
                    
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default page