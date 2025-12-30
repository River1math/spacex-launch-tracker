interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: Props) => {

 
  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search mission..."
        className="w-full max-w-md rounded-lg border border-slate-300 px-4 py-2
                   focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                   outline-none"
      />
    </div>
  );
};



export default SearchBar;



