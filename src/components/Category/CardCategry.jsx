


export default function card() {
  return (
    <>
 
   <div className="h-40 w-[40%]  lg:w-auto relative max-w-xs overflow-hidden rounded-2xl shadow-lg group ml-2 m-1 flex flex-col flex-shrink-0 snap-start ">
  <img
    src="ImgsCategory/01householddrugs.jpg"
    alt=""
    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
  />
  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60">
    <h2 className="p-4 text-white font-bold">ยาสามัญประจำบ้าน</h2>
  </div>
</div>

    </>
  );
}
