interface PropTypes {
    wikiLink:string
}
export default function PlanetWikiLink({wikiLink}:PropTypes) {
    return (
        <div className="text-white font-spartan w-full flex justify-center font-normal text-[12px] text-opacity-50">
        Source:
        <a href={wikiLink} target="_blank" className="font-bold">
          Wikipedia
        </a>
      </div>
    )
}