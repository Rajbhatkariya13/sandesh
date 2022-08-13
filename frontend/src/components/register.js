const Register = () => {
    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-green-500">
            <div className="w-1/3 border rounded-2xl shadow-xl text-center bg-green-50">
               <div className="grid grid-flow-row py-10 gap-8">
               <div className="font-bold text-3xl py-6 text-green-600">
                Register
               </div>
                <div>
                <input type='text' placeholder="Enter User Name" className="px-4 py-2 w-2/3 h-12 rounded-lg border border-green-500" />
                </div>
                <div>
                <input type='password' placeholder="Enter Password" className="px-4 py-2 w-2/3 h-12 rounded-lg border  border-green-500" />
                </div>
                <div>
                <input type='password' placeholder="Re-Enter Password" className="px-4 py-2 w-2/3 h-12 rounded-lg border  border-green-500" />
                </div>
                <div className="py-4">
                <button className='bg-green-600 text-white px-8 py-2 rounded-xl hover:bg-green-500 text-lg font-bold'>Register</button>
                </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default Register;