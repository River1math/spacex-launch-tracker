import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import LaunchCard from "./components/LaunchCard";
import LoadingSpinner from "./components/LoadingSpinner";

// ✅ 你项目里如果 types.ts 有类型，就用它（推荐）
import type { Launch } from "./types";

// ⚠️ 这里按你的 mockApi 实际导出改函数名：
// - 可能叫 getLaunches / fetchLaunches / getAllLaunches 等
import { fetchLaunchData } from "./mockApi";

type FilterStatus = "all" | "success" | "failure";

export default function App() {
  // 1) 数据源：所有发射数据
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // 2) UI 状态：搜索词 + 筛选状态
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [status, setStatus] = useState<FilterStatus>("all");

  // 3) 拉取数据（mock api）
  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchLaunchData (); // ⚠️ 若报错：说明你的函数名不同，改这里
        if (!isMounted) return;

        setLaunches(data);
      } catch {
        if (!isMounted) return;

        setError("Failed to load launches.");
      } finally {
        if (!isMounted) {
        setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  // 4) 统计 counts（派生数据，不要 useState）
  const counts = useMemo(() => {
    const all = launches.length;
    const success = launches.filter((l) => l.launch_success === true).length;
    const failure = launches.filter((l) => l.launch_success === false).length;

    return { all, success, failure };
  }, [launches]);

  // 5) 过滤后的列表（筛选 + 搜索叠加）
  const filteredLaunches = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return launches
      .filter((l) => {
        if (status === "all") return true;
        if (status === "success") return l.launch_success === true;
        return l.launch_success === false;
      })
      .filter((l) => l.mission_name.toLowerCase().includes(term));
  }, [launches, status, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-5xl px-4 pb-16">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <FilterBar status={status} onChange={setStatus} counts={counts} />

        {loading && (
          <div className="mt-10 flex justify-center">
            <LoadingSpinner />
          </div>
        )}

        {!loading && error && (
          <p className="mt-10 text-center text-sm sm:text-base text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && filteredLaunches.length === 0 && (
          <p className="mt-10 text-center text-sm sm:text-base text-slate-600">
            No results for{" "}
            <span className="font-semibold text-slate-900">
              "{searchTerm || status}"
            </span>
            .
          </p>
        )}

        {!loading && !error && filteredLaunches.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLaunches.map((launch) => (
              <LaunchCard key={launch.flight_number} launch={launch} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
