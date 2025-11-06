import Image from "next/image";

export default function ExchangeRate() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Tasa de cambio</h3>

      {/* Selects de monedas */}
      <div className="flex items-center gap-4">
        <select
          name="from"
          title="Moneda origen"
          defaultValue="NIO"
          className="border rounded p-2 bg-white w-[111px] h-[40px]"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="NIO">NIO</option>
        </select>

        <select
          name="to"
          title="Moneda destino"
          defaultValue="USD"
          className="border rounded p-2 bg-white w-[111px] h-[40px]"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="NIO">NIO</option>
        </select>
      </div>

      {/* Valores compra y venta */}
      <div className="flex justify-around gap-4 text-base font-medium">
        <b>
          <h3>36.32</h3>
        </b>
        <button title="Intercambiar monedas">
          <Image
            alt="Intercambiar monedas"
            width={24}
            height={24}
            src="/sidebar_icons/cambio_divisa_icon.svg"
          />
        </button>
        <h3>37.07</h3>
      </div>
    </section>
  );
}
