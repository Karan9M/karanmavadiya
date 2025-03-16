import StarIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge'

export default function CardHeader({title,desc,className}:{title:string,desc:string,className?:string}) {
    return (
        <div className={twMerge("flex flex-col p-6",className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{desc}</p>
        </div>
    )
}
