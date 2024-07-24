interface PropTypes {
    wikiLink:string
}
export default function PlanetWikiLink({wikiLink}:PropTypes) {
    return (
        <div className="text-white w-full flex justify-center">
        Source:
        <a href={wikiLink} target="_blank">
          Wikipedia
        </a>
      </div>
    )
}