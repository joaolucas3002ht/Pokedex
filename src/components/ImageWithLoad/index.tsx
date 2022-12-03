interface LoadingProps {
   url: string
   alt: string
}

export function ImageWithLoad({ url, alt }: LoadingProps) {
   return <img src={url} alt={alt} className={`object-contain h-full z-30 `} />
}
