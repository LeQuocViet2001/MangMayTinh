import React, { Component } from 'react';

class Web extends Component {
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
                                <h6 className="font-sans-serif text-primary fw-bold">Danh mục khóa học</h6>
                                <h1 className="mb-6">Phát triển Website</h1>
                                <form className="row g-3">
                                    <div className="col-sm-6 col-md-3">
                                        <label className="form-label" htmlFor="inputCategories">Danh mục</label>
                                        <select className="form-select" id="inputCategories">
                                            <option selected="selected">Phát triển Web</option>
                                            <option value={1}>Thiết kế UX/UI</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <label className="form-label" htmlFor="inputLevel">Cấp bậc</label>
                                        <select className="form-select" id="inputLevel">
                                            <option selected="selected">Tất cả</option>
                                            <option value={1}>Cấp độ 1 </option>
                                            <option value={2}>Cấp độ 2 </option>
                                            <option value={3}>Cấp độ 3</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <label className="form-label" htmlFor="inputLanguage">Ngôn ngữ</label>
                                        <select className="form-select" id="inputLanguage">
                                            <option selected="selected">Vietnamese</option>
                                            <option value={1}>English</option>
                                            <option value={2}>Bangla</option>
                                            <option value={3}>Hindi</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <label className="form-label" htmlFor="inputInstructor">Giảng Viên</label>
                                        <select className="form-select" id="inputInstructor">
                                            <option selected="selected">Tất cả giảng viên </option>
                                        </select>
                                    </div>
                                    <div className="col-auto z-index-2">
                                        <button className="btn btn-primary" type="submit">Tìm kiếm</button>
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
                <section className="pb-0" style={{ marginTop: '-17rem' }}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/mmt.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1"> Nhập môn Mạng máy tính</h5>   <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Giang Vien A</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/hero-header.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Học nhanh Guitar 30 ngày</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">guitar artist</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/ReactJS.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Nhập môn cơ bản với ReactJS</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">A University</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/nhat.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Cùng lấy N3 với Somatome nào!</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">JPan Kosei</a>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Thiết kế hệ thống thông tin cho người mới bắt đầu</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/psychology.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Phật giáo và tâm lý học</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/philosophy.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Giới thiệu về triết học</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/arguments.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Làm sao để nhìn nhận vấn đề thực tiễn hơn</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/experience-design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Cách tạo thời gian biểu cho chính mình</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/user-design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Viết lách như bậc thầy văn học</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/art-design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Nghệ thuật và Thiết kế đồ họa</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/photographs.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Nâng cao khả năng phân tích ảnh</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/design.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Thiết kế hệ thống thông tin cho người mới bắt đầu</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">The Museum of Modern Art</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100"><img className="card-img-top w-100" src="assets/img/gallery/critical-thinking.png" alt="courses" />
                                    <div className="card-body">
                                        <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">Introduction to Logic and Critical Thinking</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Duke University</a>
                                    </div>
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
              {/*  <section className="bg-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a className="text-decoration-none" href="#"><img src="assets/img/gallery/footer-logo.png" height={100} alt /></a>
                                <p className="text-light my-4"> <i className="fas fa-map-marker-alt me-3" /><span className="text-light">12 Hoàng Mai - Hà Nội  &nbsp;</span><a className="text-light" href="tel:+8483213123">+84983213123</a><br />Edumail, CA 94110</p>
                                <p className="text-light"> <i className="fas fa-envelope me-3"> </i><a className="text-light" href="contact-HoangNamViet@gmail.com ">contact-HoangNamViet@gmail.com </a></p>
                                <p className="text-light"> <i className="fas fa-phone-alt me-3" /><a className="text-light" href="tel:1-800-800-2299">1-800-800-2299 (Support)</a></p>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                                <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Cộng đồng </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Người học</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Đối tác</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Lập trình viên</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Người kiểm thử</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Phiên dịch viên</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog công nghệ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Trung tâm dạy học</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                                <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Thông tin</h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Thông tin về chúng tôi</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Giá</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Blog</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Nghề nghiệp</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Liên hệ</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                                <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Hơn nữa</h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="lh-lg"><a className="text-200" href="#!">Nhà đầu tư</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Khóa học</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Riêng tư</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Hỗ trợ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Khả năng tiếp cận</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Liên hệ</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Bài viết</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Danh mục</a></li>
                                    <li className="lh-lg"><a className="text-200" href="#!">Chi nhánh</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* end of .container*
                </section>  */}
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <section className="py-0" style={{ marginTop: '-5.8rem' }}>
                    <div className="container bg-danger">
                        <div className="row justify-content-md-between justify-content-evenly py-4">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                                <p className="fs--1 my-2 fw-bold text-white">Bài Tập Mạng Máy Tính, 2021, 2021</p>
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

export default Web;