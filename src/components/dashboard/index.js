import
    React, {useState, useRef, useEffect} from "react";
import {serializeHtml} from "./utils";
import "./style.css";
import {Button, Space, Card} from "antd";
import RichText from "../../slate";
import {Add} from "@material-ui/icons";

const initialValue = [
    {
        type: "paragraph",
        children: [
            {text: "This is editable "},
            {text: "rich", bold: true},
            {text: " text, "},
            {text: "much", italic: true},
            {text: " better than a "},
            {text: "<textarea>", code: true},
            {text: "!"}
        ]
    },
    {
        type: "paragraph",
        children: [
            {
                text:
                    "Since it's rich text, you can do things like turn a selection of text "
            },
            {text: "bold", bold: true},
            {
                text:
                    ", or add a semantically rendered block quote in the middle of the page, like this:"
            }
        ]
    },
    {
        type: "block-quote",
        children: [{text: "A wise quote."}]
    },
    {
        type: "paragraph",
        children: [{text: "Try it out for yourself!"}]
    }
];

function Dashboard() {

    const [input, setInput] = useState(initialValue);
    const [html, setHtml] = useState();
    const [view, setView] = useState(null);

    const renderedOutput = useRef();

    const serialize = (html) => {
        setHtml(serializeHtml(html));
    };

    useEffect(() => {
        if (renderedOutput.current && html && view === "add") {
            const htmlTree = document.createRange().createContextualFragment(html);
            renderedOutput.current.innerHTML = "";
            renderedOutput.current.appendChild(htmlTree);
        }
    }, [renderedOutput, html, view]);

    const addHandler = () => {
        setView("add");
        serialize(input);
    }


    return <Card>
        <Space direction='vertical' size='large' style={{width: '100%'}}>
            <Button type='default' icon={<Add/>} size='large' onClick={addHandler}/>
            <RichText value={input} setValue={setInput}/>
        </Space>
        {view === "add" && (
            <div
                className='rendered-input'
                ref={renderedOutput}
            >
                Rendered HTML will appear here...
            </div>
        )}
    </Card>
}

export default Dashboard
