import ButtonItem from "./ButtonItem";

export default function ButtonRow({ blok }) {

    console.log("ButtonRow blok data:", blok);
    return(
        <div className="flex flex-row gap-4 pl-4">
            {blok?.button?.map((btn) => (
                <ButtonItem blok={btn} key={btn._uid}/>
            ))}
        </div>
    );
}