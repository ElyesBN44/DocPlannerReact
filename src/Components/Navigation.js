
function Navi () {
return(
<header class="navbar container">
      <div>
        <img
          class="logo-docplanner"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
      </div>

      <div>
        <ul class="menu">
          <li><a href="#">About us</a></li>
          <li><a href="#">Career</a></li>

          <div class="dropdown">
            <button class="dropbtn">Departments</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </ul>
      </div>
    </header>
    )
}
export default Navi;