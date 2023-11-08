import { Link, Outlet } from "react-router-dom";

function BookLayout() {
  return (
    <>
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ hello: "World" }} />
    </>
  );
}

export default BookLayout;
