export default function TextCard({ children, props }) {
  return <div className="bg-secondary-dark p-4 rounded-md h-full" {...props}>{children}</div>;
}
