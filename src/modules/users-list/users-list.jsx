import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_LIST_API } from "../../store/types/adminSagaType";

export default function UserList() {
  // gửi thông tin
  const dispatch = useDispatch();

  // lấy thông tin từ reducer
  const { userList } = useSelector((state) => state.adminReducer);

  // khi khởi động trang sẽ gọi hàm
  useEffect(() => {
    getUserList();
  }, []);

  // gửi tín hiệu cho saga
  const getUserList = () => {
    dispatch({
      type: GET_USER_LIST_API,
    });
  };

  const renderContent = () => {
    return userList.map((ele) => {
      return (
        <tr key={ele.taiKhoan}>
          <td>{ele.taiKhoan}</td>
          <td>{ele.hoTen}</td>
          <td>{ele.email}</td>
          <td>{ele.soDT}</td>
          <td>{ele.maLoaiNguoiDung}</td>
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
      <h2>Quản lý người dùng</h2>
      <div className="row my-3">
        <div className="col-6">
          <input
            className="form-control w-50 mr-sm-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-primary">Thêm người dùng</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderContent()}</tbody>
      </table>
    </div>
  );
}
