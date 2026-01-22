export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-full font-medium transition";

  const styles = {
    primary: "bg-green-500 hover:bg-green-600 text-black",
    outline: "border border-white/40 hover:bg-white/10 text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
