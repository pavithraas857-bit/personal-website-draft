export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 inline-block">
        {children}
      </h2>
      <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full" />
    </div>
  );
}
