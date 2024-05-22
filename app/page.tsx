import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Image
          src={
            "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1698393578/iluus/Cone-18_x3ga8b.png"
          }
          alt="logo"
          width={300}
          height={300}
        />
        <h1 className="text-5xl">start working</h1>
        <h1 className="mt-5 text-xl">create beautiful websites</h1>
      </div>
    </section>
  );
}
