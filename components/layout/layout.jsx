import { Fragment } from "react";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </Fragment>
  );
}
