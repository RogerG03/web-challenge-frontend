import Image from "next/image";

export default function HeaderBar() {
  return (
    <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b border-gray-200">
      <button
        title="Boton barra lateral"
        className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Image
          src="/header_icons/hamburguesa_icon.svg"
          width={24}
          height={24}
          alt="Boton menu barra lateral"
        ></Image>
      </button>

      <div className="flex items-center space-x-4">
        <button
          title="campana de notificación"
          className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors relative"
        >
          <Image
            src="/header_icons/notificacion_icon.svg"
            width={24}
            height={24}
            alt="Campana de notificación"
          ></Image>
        </button>

        <div className="relative flex items-center">
          <Image
            src="/header_icons/buscador_icon.svg"
            width={24}
            height={24}
            alt="Icono de búsqueda"
            className="absolute translate-x-8"
          ></Image>
          <input
            type="search"
            placeholder="Buscar"
            className="w-48 sm:w-64 md:w-80 h-10 pl-10 pr-4 rounded-lg border border-gray-300 text-black"
          />
          <Image
            src={"/temporal_user.png"}
            width={30}
            height={30}
            alt="imagen usuario"
            className="rounded-full ml-2"
          ></Image>
        </div>
      </div>
    </header>
  );
}
