import style from "../Styles/Navbar.module.css";

function Top() {
  return (
    <>
      <div className={style.main}>
        <div className={style.head}>
          <h1> Data-powered solutions for Industrial Excellence</h1>
          <button className={style.btn}>Read More</button>
        </div>
        <div>
          <img
            className={style.image}
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Top;
