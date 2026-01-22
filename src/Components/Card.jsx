// src/components/Card.jsx
export default function Card({ image, title, description, footer }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.03] transition shadow-xl border border-zinc-800">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />
      <div className="p-5 text-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        
        {/* CHANGED: Use <div> instead of <p> to allow nested elements */}
        <div className="text-sm text-gray-400 mt-2">
          {description}
        </div>

        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}