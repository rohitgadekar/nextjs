import Image from "next/image";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col max-w-lg text-center justify-center items-center gap-5 select-none">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/nextjs-ac1be.appspot.com/o/logo%2Fcolored.png?alt=media&token=b1ffd86d-d65a-4a21-9754-7786fc9d9720`}
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-4xl">NEXTJS 14</h1>
        <h1 className="text-xl">create beautiful websites</h1>
      </div>
    </section>
  );
}
