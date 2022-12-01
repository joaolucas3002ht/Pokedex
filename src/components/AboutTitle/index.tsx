interface AboutTitleProps {
   title: string
}

export const AboutTitle = (props: AboutTitleProps) => (
   <h4 className="text-[0.5rem] md:text-xs text-zinc-100">{props.title}</h4>
)
