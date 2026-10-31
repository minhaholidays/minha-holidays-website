document.addEventListener("DOMContentLoaded",()=>{
 const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
 document.querySelectorAll("[data-booking]").forEach(form=>form.addEventListener("submit",event=>{
  event.preventDefault(); const d=new FormData(form);
  const lines=[
   "Minha Holidays — Booking Enquiry / ബുക്കിംഗ് അന്വേഷണം",
   "Name / പേര്: "+(d.get("name")||""),
   "Phone / ഫോൺ: "+(d.get("phone")||""),
   "Tour type / യാത്ര: "+(d.get("tour")||""),
   "Vehicle / സീറ്റ്: "+(d.get("vehicle")||""),
   "AC option: "+(d.get("ac")||""),
   "Passengers / യാത്രക്കാർ: "+(d.get("people")||""),
   "Pickup / പുറപ്പെടുന്ന സ്ഥലം: "+(d.get("pickup")||""),
   "Destination / ലക്ഷ്യസ്ഥലം: "+(d.get("destination")||""),
   "Preferred destination: "+(d.get("preferred")||""),
   "Start date / തുടങ്ങുന്ന തീയതി: "+(d.get("start")||""),
   "End date / അവസാന തീയതി: "+(d.get("end")||""),
   "Pickup time: "+(d.get("time")||""),
   "Budget: "+(d.get("budget")||""),
   "Message: "+(d.get("message")||"")
  ];
  const url="https://api.whatsapp.com/send?phone=919961957561&text="+encodeURIComponent(lines.join("\n"));
  const win=window.open(url,"_blank");
  if(!win) window.location.href=url;
 }));
 const q=new URLSearchParams(location.search);
 ["tour","vehicle","ac"].forEach(k=>{const el=document.querySelector('[name="'+k+'"]');if(el&&q.get(k))el.value=q.get(k)});
});
