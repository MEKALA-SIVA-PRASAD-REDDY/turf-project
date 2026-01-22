export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {tag && (
        <span className="text-green-500 text-sm font-semibold tracking-wide uppercase">
          {tag}
        </span>
      )}
      <h2 className="text-4xl font-bold mt-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-4">{subtitle}</p>
      )}
    </div>
  );
}
