//  This component displays the passed children only on mobile
//  devices and uses the Bootstrap classes to detect screen
//  length and width.
const MobileView = (props) => (
  <div
    className={
      props.className
        ? props.className + " d-block d-md-none"
        : "d-block d-md-none"
    }
    style={props.style}
  >
    {props.children}
  </div>
);

export default MobileView;
