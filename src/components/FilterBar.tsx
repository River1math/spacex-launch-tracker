

type FilterStatus = "all" | "success" | "failure";

interface Props {
    status: FilterStatus;
    onChange: (next: FilterStatus) => void;
    //add the statistic data we want to show
    counts: {
        all:number;
        success:number;
        failure:number;
    };
}

export default function FilterBar({status,onChange, counts} : Props) {
    const btnBase =
    "rounded-lg px-3 py-2 text-sm font-semibold border transition focus:outline-none focus:ring-4";
  const active =
    "bg-blue-600 text-white border-blue-600 focus:ring-blue-500/20";
  const inactive =
    "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus:ring-slate-300/20";

    const makeClass =(key: FilterStatus) => 
        `${btnBase} ${status === key ? active : inactive}`;

      return (
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 justify-center">
            <button className={makeClass("all")} onClick={() => onChange("all")}>
                All ({counts.all})
            </button>
            <button className={makeClass("success")} onClick={() => onChange("success")}>
                Success ({counts.success})
            </button>
            <button className={makeClass("failure")} onClick={() => onChange("failure")}>
                Failure ({counts.failure})
            </button>
        </div>
        );
}

