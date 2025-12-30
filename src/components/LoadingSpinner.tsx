const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center py-10 gap-3">
      <div className="h-8 w-8 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
      <p className="text-sm text-slate-600">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
