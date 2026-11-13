export default function TextCard({ children, props }) {
  return <div className="bg-secondary-dark p-4 rounded-md" {...props}>{children}</div>;
}
