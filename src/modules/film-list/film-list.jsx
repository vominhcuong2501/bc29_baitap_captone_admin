import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_FILM_LIST_API } from "../../store/types/adminSagaType";

export default function FilmList() {
  // chuyển trang
  const navigate =useNavigate()

  // gửi thông tin
  const dispatch = useDispatch();

  // lấy thông tin từ reducer
  const { filmList } = useSelector((state) => state.adminReducer);
  console.log(filmList);

  // khi khởi động trang sẽ gọi hàm
  useEffect(() => {
    getFilmList();
  }, []);

  // gửi tín hiệu cho saga
  const getFilmList = () => {
    dispatch({
      type: GET_FILM_LIST_API,
    });
  };

  const renderContent = () => {
    return filmList.map((ele) => {
      return (
        <tr key={ele.maPhim}>
          <td>{ele.maPhim}</td>
          <td>
            <img src={ele.hinhAnh} alt={ele.hinhAnh} height={50} width={50} />
          </td>
          <td>{ele.tenPhim}</td>
          <td>
            <button className="btn btn-warning mr-1">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger">
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h2>Quản lý phim</h2>
      <div className="row my-3">
        <div className="col-6">
          <input
            className="form-control w-50 mr-sm-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="col-6 text-right">
          <button onClick={() => navigate('/addfilm')} className="btn btn-primary">Thêm phim</button>
        </div>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th>Mã phim</th>
            <th>Hình ảnh</th>
            <th>Tên phim</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
    </div>
  );
}
