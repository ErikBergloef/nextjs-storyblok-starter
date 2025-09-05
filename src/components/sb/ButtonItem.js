export default function ButtonItem({ blok }) {
    console.log("Button data from Storyblok:", blok);

    return(
        <button className="px-4 border text-black rounded-sm flex space-ibetween 2px">
            {blok?.label}
        </button>
    );
}