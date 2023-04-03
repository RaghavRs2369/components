import classNames from "classnames";

// ----------------------------------------------------------

export default function Panel({ children, className, ...rest }) {
  const finalClassaNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassaNames}>
      {children}
    </div>
  );
}
