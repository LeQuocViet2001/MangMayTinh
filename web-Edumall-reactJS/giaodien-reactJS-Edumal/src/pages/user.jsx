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
                                <li className="nav-item px-2"><a className="nav-link active" aria-current="page" href="/">Trang ch???</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/pricing">Gi??</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/web-development">Ph??t tri???n website</a></li>
                                <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="/user-research">Nghi??n c???u</a></li>
                            </ul><a className="btn btn-primary order-1 order-lg-0" href="#!">????ng k??</a>
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
                                <h6 className="font-sans-serif text-primary fw-bold">Chi ti???t kh??a h???c</h6>
                                <h1 className="mb-6">Nh???p m??n<br />M???ng m??y t??nh</h1>
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
                                <h1 className="my-4">Mi??u t???</h1>
                                <p> M???ng m??y t??nh l?? m???ng vi???n th??ng k??? thu???t s??? cho ph??p c??c n??t m???ng chia s??? t??i nguy??n. Trong c??c m???ng m??y t??nh, c??c thi???t b??? m??y t??nh trao ?????i d??? li???u v???i nhau b???ng c??c k???t n???i (li??n k???t d??? li???u) gi???a c??c n??t. C??c li??n k???t d??? li???u n??y ???????c thi???t l???p qua c??p m???ng nh?? d??y ho???c c??p quang ho???c ph????ng ti???n kh??ng d??y nh?? Wi-Fi... </p>
                                <h1>B???n s??? h???c g???</h1>
                                <ul className="list-unstyled">
                                    <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>M???c ti??u</strong>&nbsp; ?????n v???i kh??a h???c, b???n s??? hi???u v?? l??m ch??? ???????c nh???ng c??ng ngh??? m???ng ph??? bi???n nh?? th?? t??n ??i???n t???, truy???n t???i t???p tin, truy???n th??ng th??ng tin, hay nh???ng c??ng ngh??? ti??n ti???n nh?? ??i???n to??n ????m m??y, t??nh to??n l?????i, t??nh to??n di ?????ng, x??y d???ng v?? v???n h??nh data center, an to??n v?? b???o m???t th??ng tin. </li>
                                    <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>Truy???n t???i</strong>&nbsp; Ng??nh M???ng m??y t??nh l?? m???t ng??nh ph?? h???p cho nh???ng b???n ham th??ch kh??m ph?? c??ng ngh???, giao ti???p v???i nhi???u ng?????i tr??n kh???p h??nh tinh m?? ch??? c???n th??ng qua chi???c m??y t??nh c?? k???t n???i m???ng. ?????ng th???i, v???i nh???ng hi???u bi???t v??? m???ng m??y t??nh, c??c b???n c?? th??? x??y d???ng ???????c cho m??nh m???t kh??ng gian chuy??n m??n c???a m??nh tr??n Internet. </li> 
                                    {/* <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>?????nh gi?? c?? th??? truy c???p Chi ph?? c???a b???ng MCIT Online</strong>&nbsp; th???p h??n ????ng k??? so v???i c??c l???a ch???n thay th??? trong khu??n vi??n tr?????ng v?? h???u h???t c??c b???ng th???c s?? tr???c tuy???n v??? Khoa h???c M??y t??nh. Sinh vi??n ph???i tr??? $ 2,640 cho m???i ????n v??? kh??a h???c cho t???ng s??? 10 ????n v??? kh??a h???c. H???c ph?? v?? l??? ph?? ???????c ????ng d?????i d???ng h?????ng d???n v?? c?? th??? thay ?????i.</li> */}
                                    {/* <li className="mb-3"> <i className="fas fa-check text-info me-2" /><strong>H??y th??? tr?????c khi b???n ????ng k?? Penn Engineering</strong>&nbsp; cung c???p Chuy??n ng??nh tr???c tuy???n, Gi???i thi???u v??? L???p tr??nh v???i Python v?? Java, tr??n Coursera ????? gi??p b???n quy???t ?????nh xem ch????ng tr??nh MCIT Online c?? ph?? h???p hay kh??ng tr?????c khi b???n ????ng k??.</li> */}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>???? ????ng k?? </strong>: 1200 h???c vi??n</li>
                                        <li className="list-group-item"><strong>Th???i l?????ng </strong>: 2 gi???</li>
                                        <li className="list-group-item"><strong>B??i gi???ng </strong>: 8</li>
                                        <li className="list-group-item"><strong>Danh m???c </strong>: CNTT</li>
                                        <li className="list-group-item"><strong>Tr??nh ?????</strong>: S?? c???p</li>
                                        <li className="list-group-item text-center"><img src="assets/img/gallery/searching.png" width={78} alt="..." />
                                            <p className="text-muted mb-0 mt-4">Li??n h??? v???i b??? ph???n h??? tr??? kh??ch h??ng t???i</p><a className="text-info" href="contact-HoangNamViet@gmail.com ">contact-HoangNamViet@gmail.com</a>
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
                                <h5 className="text-primary font-sans-serif fw-bold">????ng k?? ngay</h5>
                                <h1 className="mb-5">Nh???n ngay<br />M???i b???n c???p nh???p</h1>
                                <form className="row g-0 align-items-center">
                                    <div className="col">
                                        <div className="input-group-icon">
                                            <input className="form-control form-little-squirrel-control" type="email" placeholder="Nh???p email" aria-label="email" /><i className="fas fa-envelope input-box-icon" />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary rounded-0" type="submit">????ng k?? ngay</button>
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
                                <p className="fs--1 my-2 fw-bold text-white">B??i T???p M???ng M??y T??nh, 2021</p>
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