
function App() {
  return (
      <div className="wraper">

<div className="drawer">
  <h3>Корзина</h3>
  <div className="cartitem">
    <img src="/img/k1.jpg" alt="skechers" width={40} height={40}/>
    <div>
      <p>Чоловічі кросовки Nike AirMax</p>
      <b>10000 грн.</b>
    </div>
    <img src="/img/pay.svg" alt="pay" width={30} height={30}/>
  </div>

  <div className="cartitem">
    <img src="/img/k2.jpg" alt="skechers" width={40} height={40}/>
    <div>
      <p>Чоловічі кросовки Nike AirMax</p>
      <b>20000 грн.</b>
    </div>
    <img src="/img/pay.svg" alt="pay" width={30} height={30}/>
  </div>


<ul className="cardtotalblok">
  <li>
    <span>Ціна</span>
    <div></div>
    <b>19000грн</b>
  </li>
  <li>
    <span>Податок -5%</span>
    <div></div>
    <b>100грн</b>
  </li>
</ul>
<button className="buttonpay">Оформити заказ</button>
  </div>

      <header>
      <div className="headerleft">
      <img src="/img/skechers.png" alt="skechers" width={100} />
      <div className="headerinfo">
        <h3>React Кроссівки</h3>
        <p>Магазин оригінальних кросовок</p>
      </div>
      </div>
      <ul className="headerright">
        <li>
          <img src="/img/shop.png" alt="shop" width={50}/><span>10000грн </span>
        </li>
        <li>
          <img src="/img/user1.jpg" alt="user" width={50}/>
        </li>
      </ul>

      </header>

      <div className="content"> 
      <h1>Всі кросовки</h1>
      <div className="searchblock">
        <img src="/img/52.png" alt="search" width={30} height={30}/>
        <input placeholder="Пошук . . ."></input>
       </div>
      </div>
      <div className="snaekers">
<div className="card">
  <div className="favorit"><img src="/img/unlike.svg" alt="unlike" width={20} height={20}/></div>
  <img src="/img/k1.jpg" alt="k1" wigth={200} height={200}/>
<p>Чоловічі кросовки Nike AirMax</p>
<div className="cardbutton">
  <div>
    <span>Ціна</span>
    <br></br>
    <b>10000грн</b>
    </div>
    <button>
      <img src="/img/plus1.png" alt="plus" width={30} height={30}/>

    </button>
</div>
</div>

<div className="card">
<div className="favorit"><img src="/img/unlike.svg" alt="unlike" width={20} height={20}/></div>
  <img src="/img/k2.jpg" alt="k2" wigth={200} height={200}/>
<p>Чоловічі кросовки Nike AirMax</p>
<div className="cardbutton">
  <div>
    <span>Ціна</span>
    <br></br>
    <b>20000грн</b>
    </div>
    <button>
      <img src="/img/plus1.png" alt="plus" width={30} height={30}/>

    </button>
</div>
</div>

<div className="card">
<div className="favorit"><img src="/img/unlike.svg" alt="unlike" width={20} height={20}/></div>
  <img src="/img/k3.jpg" alt="k3" wigth={200} height={200}/>
<p>Чоловічі кросовки Nike AirMax</p>
<div className="cardbutton">
  <div>
    <span>Ціна</span>
    <br></br>
    <b>30000грн</b>
    </div>
    <button>
      <img src="/img/plus1.png" alt="plus" width={30} height={30}/>

    </button>
</div>
</div>

<div className="card">
<div className="favorit"><img src="/img/unlike.svg" alt="unlike" width={20} height={20}/></div>
  <img src="/img/k1.jpg" alt="k4" wigth={200} height={200}/>
<p>Чоловічі кросовки Adidas AirMax</p>

<div className="cardbutton">
  <div>
    <span>Ціна</span>
    <br></br>
    <b>40000грн</b>
    </div>
    <button>
      <img src="/img/plus1.png" alt="plus" width={30} height={30}/>
    </button>
</div>
</div>
</div>

<footer>
  <p>Контакти: тел 099-99-90-000</p>
</footer>
          </div>

          
  );
}

export default App;
