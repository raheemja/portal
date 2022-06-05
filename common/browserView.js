//  This component displays the passed children only on broswer
//  and tablet and uses the Bootstrap classes to detect screen
//  length and width.
const BrowserView = (props) => (
  <div
    style={props.style}
    className={
      props.className
        ? props.className + " d-none d-md-block"
        : "d-none d-md-block"
    }
  >
    {props.children}
  </div>
);

export default BrowserView;
