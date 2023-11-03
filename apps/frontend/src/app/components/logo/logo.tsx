export interface LogoProps {
    imageSrc?: string;
    text?: string;
}

export function Logo(props: LogoProps) {
    return (
        <div className="flex items-center gap-2">
            {props.imageSrc ? (
                <img className="h-7 w-7" src={props.imageSrc} alt="logo"></img>
            ) : null}
            {props.text ? (
                <div className="text-xl font-medium text-black">
                    {props.text}
                </div>
            ) : null}
        </div>
    );
}

export default Logo;
