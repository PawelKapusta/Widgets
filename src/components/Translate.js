import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
    {
        label: "Russian",
        value: 'ru'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'Chinese ',
        value: 'zh-TW'
    }
]
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>

            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} text=""/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );

}
export default Translate;