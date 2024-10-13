import Image from "next/image";

export default function Home() {
  return (
      <div className="sb-main-dashboard">
        <nav>
          <div className="nav__brand">
            {/*<Image src="../static/imgs/logo.png" className="nav__brand-img" alt="">*/}
          </div>
          <ul className="nav__main">
            <li><a href="#">پروفایل</a></li>
            <li><a href="#">تراکنش ها</a></li>
            <li><a href="#">پس انداز ها</a></li>
          </ul>
          <ul className="nav__footer">
            <li><a href="#">خروج</a></li>
          </ul>
        </nav>
        <div className="features">
      <p className="feature--head">بهنام امینی ساردویی</p>
      <div className="feature feature--1">
        <div className="budget">
          <p className="budget-title">بودجه</p>
          <p className="budget-title">5000000000000 تومان</p>
        </div>
        <div className="budget">
          <p className="budget-title">بودجه</p>
          <p className="budget-title">50000 تومان</p>
        </div>
        <div className="budget">
          <p className="budget-title">بودجه</p>
          <p className="budget-title">50000000 تومان</p>
        </div>
      </div>


      <div className="feature feature--3">
        <p>خرید جدید</p>
      </div>


    </div>

  </div>
  );
}
