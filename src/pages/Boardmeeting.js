import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./mix.css";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const BoardMeeting = () => {
  //   const [passShow, setPassShow] = useState(false);
  //   const history = useNavigate();
  // const history = useNavigate();
  const history = useHistory();

  const [inpval, setInpval] = useState({
    typeofmeeting: "",
    Serialnoofmeeting: "",
    DateofMeeting: "",
    ModeofMeeting: "",
  });

  const setVal = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const BoardMeeting = async (e) => {
    e.preventDefault();

    const { typeofmeeting, Serialnoofmeeting, DateofMeeting, ModeofMeeting } =
      inpval;

    if (typeofmeeting === "") {
      toast.error("Type of Meeting is required!", {
        position: "top-center",
      });
      // } else if (!email.includes("@")) {
      //   toast.warning("includes @ in your email!", {
      //     position: "top-center",
      //   });
    } else if (Serialnoofmeeting === "") {
      toast.error("Serial No. of Meeting is required!", {
        position: "top-center",
      });

      // } else if (password.length < 6) {
      //   toast.error("password must be 6 char!", {
      //     position: "top-center",
      //   });
    } else if (DateofMeeting === "") {
      toast.error("Date of Meeting is required!", {
        position: "top-center",
      });
    } else if (ModeofMeeting === "") {
      toast.error("Mode of Meeting is required!", {
        position: "top-center",
      });
    } else {
      console.log(inpval);
    }
    // } else {
    // console.log("user login succesfully done");

    //   const data = await fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });

    //   const res = await data.json();
    //  console.log(res);

    //   if (res.status === 201) {
    //     localStorage.setItem("usersdatatoken", res.result.token);
    //     // history("/dash", { replace: true });
    //     // window.location.href = "/dash";
    //     history.push("/dash");

    //     setInpval({ ...inpval, email: "", password: "" });
    //   }
    //   console.log({ inpval });
    // }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Welcome to Notice of Meet Page</p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="typeofmeeting">Type of Meeting</label>
              <input
                type="text"
                value={inpval.typeofmeeting}
                onChange={setVal}
                name="typeofmeeting"
                id="typeofmeeting"
                placeholder="Enter Type of Meeting"
              />
            </div>
            <div className="form_input">
              <label htmlFor="Serialnoofmeeting">Serial No. of Meeting</label>
              <div className="two">
                <input
                  type="text"
                  onChange={setVal}
                  value={inpval.Serialnoofmeeting}
                  name="Serialnoofmeeting"
                  id="Serialnoofmeeting"
                  placeholder="Enter Serial No. of Meeting"
                />
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="DateofMeeting">Date of Meeting</label>
              <div className="two">
                <input
                  type="text"
                  onChange={setVal}
                  value={inpval.DateofMeeting}
                  name="DateofMeeting"
                  id="DateofMeeting"
                  placeholder="Enter Date of Meeting"
                />
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="ModeofMeeting">Mode of Meeting</label>
              <div className="two">
                <input
                  type="text"
                  onChange={setVal}
                  value={inpval.ModeofMeeting}
                  name="ModeofMeeting"
                  id="ModeofMeeting"
                  placeholder="Enter Mode of Meeting"
                />
              </div>
            </div>

            <button className="btn" onClick={BoardMeeting}>
              Click
            </button>
            {/* <p>
              Don't have an Account? <NavLink to="/register">Sign Up</NavLink>{" "}
            </p> */}
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default BoardMeeting;
