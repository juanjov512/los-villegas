import { Fragment } from "react";
import { Navbar } from "./components/Navbar"
import { Header } from "./pages/Header";
import { Button } from "./components/Button/styles";

const App = (): JSX.Element => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <Fragment>
      <Navbar links={links} />
      <Header />
      <Button color={"secondary"}>Hola Como</Button>
    </Fragment>
  )
}

export default App
