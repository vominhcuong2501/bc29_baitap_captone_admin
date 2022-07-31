import { request } from "../configs/axios";

export const fetchFilmListApi = () => {
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
  });
};
