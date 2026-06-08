export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923336070227"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp chat +92 333 607 0227"
      className="fixed bottom-5 right-5 z-50"
    >
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.97 4.72 4.17.66.28 1.18.45 1.58.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.62.23-1.16.16-1.28-.07-.12-.25-.18-.52-.32zM16.01 3C8.83 3 3 8.82 3 16c0 2.54.74 5 2.13 7.11L3 29l6.08-2.04A12.9 12.9 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3z" />
        </svg>
      </span>
    </a>
  );
}
