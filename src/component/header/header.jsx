import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
    const styleLogo = {
        color: "rgb(253, 194, 33)",
        fontFamily: "Times New Roman, Times, serif",
        fontSize: "50px",
        fontWeight: " bold",
        fontStyle: "italic",
        textDecoration: "none",
      };
  return (
    <nav className="navbar navbar-expand-sm navbar-light text-center p-0 row">
        <div className="col-3">
          <a style={styleLogo} href="#">
            CyberFilm
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="col-9 text-right " id="collapsibleNavId">
          <button onClick={() => navigate('/login')} className="btn btn-success  my-sm-0" type="button">
            Đăng nhập
          </button>
        </div>
      </nav>
  )
}
