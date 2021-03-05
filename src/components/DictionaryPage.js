import KanjiList from './KanjiList.js';

const DictionaryPage = () => {
    const kanjis = [
        {kanji: '患', meaning: 'afflicted, disease, suffer from, be ill', kun: 'わずら.う', on: 'カン'},
        {kanji: '者', meaning: 'someone, person', kun: 'もの', on: 'シャ'},
        {kanji: '元', meaning: 'beginning, former time, origin', kun: 'もと', on: 'ゲン、 ガン'},
        {kanji: '気', meaning: 'spirit, mind, air, atmosphere, mood', kun: 'き', on: 'キ、 ケ'}
    ];

    return (
        <div className="dictionary_page">
            <div className="picture"></div>
            <h1>患者元気</h1>
            <button><span>✩</span><span>お気に人リ</span></button>
            {/*<a href="">冒険冒険</a>*/}
            <div className="textbox">
                <p>
                    Seemingly a sailor who is amnesiac about all details of his personal life.
                    For some reason he has FOUR TESTICLES?!?! The real identity of this character
                    is unknown. The second chapter stated that the ジョジョの奇妙な冒険 protagonist's
                    name could be 冒険冒険, however it is later revealed that he is merely a
                    doppelanger for the real 冒険冒険. He was later given the name 冒険冒険
                    by the 冒険 family, who took him in.
                </p>
            </div>
            <div className="breakdown-field">
                <h2>漢字 used:</h2>
                <ul>
                    <KanjiList kanjis={kanjis}/>
                </ul>
                <div className="other_entries">
                    <h2>Other entries:</h2>
                </div>
            </div>
        </div>
    );
}
 
export default DictionaryPage;