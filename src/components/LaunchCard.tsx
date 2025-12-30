import type { Launch } from "../types";

const LaunchCard = ({ launch }: { launch: Launch }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-blue-600">
          #{launch.flight_number} {launch.mission_name}
        </h3>

        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            launch.launch_success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {launch.launch_success ? "Success" : "Failure"}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        {launch.details || "No details available."}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Launch Year: {launch.launch_year}
      </p>
    </div>
  );
};

export default LaunchCard;
