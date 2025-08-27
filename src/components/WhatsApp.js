"use client";

export default function WhatsAppButton({
  phoneNumber,
  message,
  children,
  className = "",
}) {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button onClick={openWhatsApp} className={className}>
      {children}
    </button>
  );
}
