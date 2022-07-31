import React from 'react'
import './add-film.scss'

export default function AddFilm() {
  return (
    <div className='ml-5'>
      <h4 className='mb-5'>Thêm phim mới</h4>
      <form className='w-50'>
        <div className='form-inline mb-3'>
          <label>Tên phim:</label>
          <input type="text" className='form-control ml-auto w-75' />
        </div>
        <div className='form-inline mb-3'>
          <label>Mô tả:</label>
          <input type="text" className='form-control ml-auto w-75' />
        </div>
        <div className='form-inline mb-3'>
          <label>Trailer:</label>
          <input type="text" className='form-control ml-auto w-75' />
        </div>
        <div className='form-inline mb-3'>
          <label>Ngày khởi chiếu:</label>
          <input type="date" className='form-control ml-auto w-75' />
        </div>
        <div className='form-inline mb-3'>
          <label>Đang chiếu:</label>
          <input type="radio" name='dangChieu' className='form-control' style={{marginLeft: '60px'}}/>Tắt
          <input type="radio" name='dangChieu' className='form-control ml-5' />Bật
        </div>
        <div className='form-inline mb-3'>
          <label>Sắp chiếu:</label>
          <input type="radio" name='sapChieu' className='form-control' style={{marginLeft: '70px'}}/>Tắt
          <input type="radio" name='sapChieu' className='form-control ml-5' />Bật
        </div>
        <div className='form-inline mb-3'>
          <label>Hot:</label>
          <input type="radio" name='hot' className='form-control' style={{marginLeft: '112px'}}/>Tắt
          <input type="radio" name='hot' className='form-control ml-5' />Bật
        </div>
        <div className='form-inline mb-3'>
          <label>Số sao:</label>
          <input type="number" min={0} max={5} className='form-control ml-auto w-75' placeholder='0'/>
        </div>
        <div className='form-inline mb-3'>
          <label>Link hình ảnh:</label>
          <input type="text" className='form-control ml-auto w-75' />
        </div>
        <div className='text-right'>
          <button type='button' className='btn btn-info'>Thêm phim mới</button>
        </div>
      </form>
    </div>
  )
}
