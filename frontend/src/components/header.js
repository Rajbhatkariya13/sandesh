import { Link } from "react-router-dom";

export default function Header(){
    return (
        <>
        <div className="bg-blue-500 text-white py-5 px-8 sticky top-0">
            <div className="flex justify-between">
            <div className="flex items-center">
            <div><img src='https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png' className="w-12 h-12"/></div>
           <div className="font-bold text-3xl mx-4">Sandesh</div>
            </div>
            <div>
                <Link to='/login'>
                <button className="bg-white text-blue-600 rounded-xl px-6 py-2 font-bold shadow-md hover:bg-slate-400 hover:text-white">Logout</button>
                </Link>
              
            </div>
            </div>
        </div>
        </>
    )
}