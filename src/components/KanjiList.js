const KanjiList = (props) => {
    return (
        <div className="kanji-list">
            {props.kanjis.map(kanji => (
                <li>
                    <h2>{kanji.kanji}</h2>
                    <p>{kanji.meaning}</p>
                    <p>Kun: {kanji.kun}</p>
                    <p>On: {kanji.on}</p>
                </li>
            ))}
        </div>
    );
}
 
export default KanjiList;