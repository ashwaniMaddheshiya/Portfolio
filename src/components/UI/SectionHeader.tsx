const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center mb-10 text-center text-md font-semibold text-gray-700">
    <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-gray-300 mx-4 animate-pulse" />
    <span className="relative px-2 text-secondary tracking-wider uppercase">
      {title}
    </span>
    <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-gray-300 mx-4 animate-pulse" />
  </div>
);

export default SectionHeader;
