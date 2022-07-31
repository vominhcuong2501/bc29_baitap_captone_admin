import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const formRef = useRef();

  const [state, setState] = useState({
    taiKhoan: '',
    matKhau: ''
  });

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setState({
      ...state,
      [name] : value
    });
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();

  };
  return (
    <div className="w-50 mx-auto mt-5">
      <div className="card p-0">
        <div
          className="card-header bg-warning text-white font-weight-bold text-center"
          style={{ fontSize: "25px" }}
        >
          ĐĂNG NHẬP
        </div>
        <div className="card-body">
          <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Tài khoản</label>
                  <input
                    required
                    name="taiKhoan"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                  />
                 
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    required
                    name="matKhau"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                  />
                 
                </div>
              </div>
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-warning mr-2">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
