import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <main className="main" id="top">
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="bg-danger py-2 d-none d-sm-block">
                    <div className="container"><img src="#" height={51} alt />
                        <div className="row align-items-center">
                            <div className="col-auto d-none d-lg-block">
                                <p className="my-2 fs--1"><i className="fas fa-map-marker-alt me-3 text-white" /><span className="text-white">Bach Khoa - Da Nang </span></p>
                            </div>
                            <div className="col-auto ms-md-auto order-md-2 d-none d-sm-block">
                                <ul className="list-unstyled list-inline my-2">
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-facebook-f text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-pinterest text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-twitter text-900 text-white" /></a></li>
                                    <li className="list-inline-item"><a className="text-decoration-none" href="#!"><i className="fab fa-instagram text-900 text-white"> </i></a></li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <p className="my-2 fs--1"><i className="fas fa-envelope me-3 text-white" /><a className="text-white text-900" href="contact-HoangNamViet@gmail.com ">contact-HoangNamViet@gmail.com </a></p>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="container"><a className="navbar-brand" href="index.html"><img src="assets/img/gallery/logo-n.png" height={45} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
                        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                                <li className="nav-item px-2"><a className="nav-link active" aria-current="page" href="/">Trang chủ</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/pricing">Giá</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/web-development">Phát triển website</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/user-research">Nghiên cứu</a></li>
                            </ul><a className="btn btn-primary order-1 order-lg-0" href="#!">Đăng kí</a>
                            <form className="d-flex my-3 d-block d-lg-none">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                            <div className="dropdown d-none d-lg-block">
                                <button className="btn btn-outline-light ms-2" id="dropdownMenuButton1" type="submit" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-search text-800" /></button>
                                <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1" style={{ top: 55 }}>
                                    <form>
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="pb-11 pt-7 bg-600">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h6 className="font-sans-serif text-primary fw-bold">Chi tiết khóa học</h6>
                                <h1 className="mb-6">Nhập môn<br />Mạng máy tính</h1>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section style={{ marginTop: '-21.5rem' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8"><img className="w-100" src="assets/img/gallery/mmt.png" alt="..." />
                                <h1 className="my-4">Miêu tả</h1>
                                <p> Mạng máy tính là mạng viễn thông kỹ thuật số cho phép các nút mạng chia sẻ tài nguyên. Trong các mạng máy tính, các thiết bị máy tính trao đổi dữ liệu với nhau bằng các kết nối (liên kết dữ liệu) giữa các nút. Các liên kết dữ liệu này được thiết lập qua cáp mạng như dây hoặc cáp quang hoặc phương tiện không dây như Wi-Fi... </p>
                                <h1>Bạn sẽ học gì?</h1>
                                <ul className="list-unstyled">
                                    <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>Mục tiêu</strong>&nbsp; Đến với khóa học, bạn sẽ hiểu và làm chủ được những công nghệ mạng phổ biến như thư tín điện tử, truyền tải tập tin, truyền thông thông tin, hay những công nghệ tiên tiến như điện toán đám mây, tính toán lưới, tính toán di động, xây dựng và vận hành data center, an toàn và bảo mật thông tin. </li>
                                    <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>Truyền tải</strong>&nbsp; Ngành Mạng máy tính là một ngành phù hợp cho những bạn ham thích khám phá công nghệ, giao tiếp với nhiều người trên khắp hành tinh mà chỉ cần thông qua chiếc máy tính có kết nối mạng. Đồng thời, với những hiểu biết về mạng máy tính, các bạn có thể xây dựng được cho mình một không gian chuyên môn của mình trên Internet. </li> 
                                    {/* <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>Định giá có thể truy cập Chi phí của bằng MCIT Online</strong>&nbsp; thấp hơn đáng kể so với các lựa chọn thay thế trong khuôn viên trường và hầu hết các bằng thạc sĩ trực tuyến về Khoa học Máy tính. Sinh viên phải trả $ 2,640 cho mỗi đơn vị khóa học cho tổng số 10 đơn vị khóa học. Học phí và lệ phí được đăng dưới dạng hướng dẫn và có thể thay đổi.</li> */}
                                    {/* <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>Hãy thử trước khi bạn đăng ký Penn Engineering</strong>&nbsp; cung cấp Chuyên ngành trực tuyến, Giới thiệu về Lập trình với Python và Java, trên Coursera để giúp bạn quyết định xem chương trình MCIT Online có phù hợp hay không trước khi bạn đăng ký.</li> */}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Đã đăng kí </strong>: 1200 học viên</li>
                                        <li className="list-group-item"><strong>Thời lượng </strong>: 2 giờ</li>
                                        <li className="list-group-item"><strong>Bài giảng </strong>: 8</li>
                                        <li className="list-group-item"><strong>Danh mục </strong>: CNTT</li>
                                        <li className="list-group-item"><strong>Trình độ</strong>: Sơ cấp</li>
                                        <li className="list-group-item text-center"><img src="assets/img/gallery/searching.png" width={78} alt="..." />
                                            <p className="text-muted mb-0 mt-4">Liên hệ với bộ phận hỗ trợ khách hàng tại</p><a className="text-info" href="contact-HoangNamViet@gmail.com ">contact-HoangNamViet@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                {/* ============================================*/}
                {/* <section> begin ============================*/}

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-4 mb-5"><img src="assets/img/gallery/cta.png" width={280} alt="cta" /></div>
                            <div className="col-md-6 col-lg-5">
                                <h5 className="text-primary font-sans-serif fw-bold">Đăng kí ngay</h5>
                                <h1 className="mb-5">Nhận ngay<br />Mỗi bản cập nhập</h1>
                                <form className="row g-0 align-items-center">
                                    <div className="col">
                                        <div className="input-group-icon">
                                            <input className="form-control form-little-squirrel-control" type="email" placeholder="Nhập email" aria-label="email" /><i className="fas fa-envelope input-box-icon" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary rounded-0" type="submit">Đăng kí ngay</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>{/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="bg-footer">
                    
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <section className="py-0" style={{ marginTop: '-5.8rem' }}>
                    <div className="container bg-danger">
                        <div className="row justify-content-md-between justify-content-evenly py-4">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                                <p className="fs--1 my-2 fw-bold text-white">Bài Tập Mạng Máy Tính, 2021</p>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6">
                                <p className="fs--1 my-2 text-center text-md-end text-white"> Made with&nbsp;
                                    <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="#EB6453" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg>&nbsp;by&nbsp;<a className="fw-bold text-900 text-white">NamHoangVietNhom6 </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

export default User;