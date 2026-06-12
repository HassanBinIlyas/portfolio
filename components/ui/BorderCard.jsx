export default function BorderCard({ children, darkMode }) {
  return (
    <div className="relative inline-flex w-full overflow-hidden rounded-lg p-[1px] group">

      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <div className={`w-full relative rounded-lg px-6 py-5 ${
          darkMode ? "bg-black" : "bg-white"
        }`}>
        {children}
      </div>
    </div>
  );
}


