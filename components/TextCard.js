export default function TextCard({ children, props }) {
  return <div className="bg-secondary-dark p-4" {...props}>{children}</div>;
}
