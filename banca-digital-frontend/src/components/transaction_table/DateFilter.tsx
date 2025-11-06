import React from "react";
interface DateFilterProps {
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

function DateFilter({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DateFilterProps) {
  return (
    <div className="flex gap-2 items-center bg-white p-2 rounded-md shadow">
      <label className="text-sm text-black">Desde:</label>
      <input
        title="input fecha inicio"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border text-black rounded-md p-1 text-sm"
      />
      <label className="text-sm text-black">Hasta:</label>
      <input
        title="input fecha fin"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border text-black rounded-md p-1 text-sm"
      />
      <button
        onClick={() => {
          setStartDate("");
          setEndDate("");
        }}
        className="ml-2 text-xs text-gray-600 underline"
      >
        Limpiar
      </button>
    </div>
  );
}

export default DateFilter;
