import Image from 'next/image'
 
export const metadata = { 
    title: "Page Not Found",
}
export default function NotFound() {
  return (
    <div className="px-2 w-full">
        <div className="mx-auto flex flex-col justify-center items-center gap-4">
            <Image className="m-0 rounded-xl"
            src="/images/not-found.jpg"
            width={300}
            height={300}
            sizes="300px"
            alt="Page not found"
            priority={true}
            title="Page Not Found"
            />
        </div>
    </div>
  )
}