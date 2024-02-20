import "./App.css";
import Header from "./Header";
import PinterestLayout from "./PinterestLayout";
import PinterestLayoutDark from "./PinterestLayoutDark";
import HeaderDark from "./HeaderDark";

export default function App() {
  const isDark = false;

  return (
    <>
      {isDark ? (
        <>
          <HeaderDark />
          <PinterestLayoutDark />
        </>
      ) : (
        <>
          <Header />
          <PinterestLayout />
        </>
      )}
    </>
  );
}
