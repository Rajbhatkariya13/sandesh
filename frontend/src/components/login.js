import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState("");
  let navigate=useNavigate();

  const login = (obj) => {
    var promise = new Promise((resolve, reject) => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
    return promise;
  };

  const loginuser = () => {
    var obj = {
      name:username,
      password:password,
    };
    login(obj).then(
      (res) => {
        console.log(res);
        if(res.success)
        {
            navigate('/articles')

        }else{
            setError(res.err);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-1/3 border rounded-2xl shadow-xl text-center bg-blue-50">
          <div className="grid grid-flow-row py-10 gap-5">
            {error.length>0 && <div>{error}</div>}
            <div className="font-bold text-3xl py-6 text-blue-600">
              User Login
            </div>
            <div>
              <input
                type="text"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                placeholder="Enter User Name"
                className="px-4 py-2 w-2/3 h-12 rounded-lg border border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Enter Password"
                className="px-4 py-2 w-2/3 h-12 rounded-lg border  border-blue-500"
              />
            </div>
            <div className="py-4">
              <button
                className="bg-blue-600 text-white px-8 py-2 rounded-xl hover:bg-blue-500 text-lg font-bold"
                onClick={loginuser}
              >
                Login
              </button>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/register">
                <button className="bg-blue-600 text-white px-8 py-2 rounded-xl hover:bg-blue-500 text-lg font-bold">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
