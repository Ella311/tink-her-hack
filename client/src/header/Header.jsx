import "./header.css";

export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
        <span className="headerTitleSm">redefines your boundaries</span>
        <span className="headerTitleLg">BlogSpace</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/2274267.jpg"
        alt=""
      />
    </div>
  );
}