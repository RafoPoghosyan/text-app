import 'antd/dist/antd.css';
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Element, Leaf} from "./utils";
import {MarkButton, BlockButton} from '../components/UI'
import {Editable, withReact, Slate, useSlate} from 'slate-react'
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import CodeIcon from "@material-ui/icons/Code";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {withHistory} from 'slate-history'
import {Card, Space} from "antd";
import {createEditor} from 'slate'


const RichText = ({value, setValue}) => {

    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={value =>
                setValue(value)
            }
        >
            <Card title={
                <Space>
                    <MarkButton format="bold" icon={<FormatBoldIcon/>}/>
                    <MarkButton format="italic" icon={<FormatItalicIcon/>}/>
                    <MarkButton format="underline" icon={<FormatUnderlinedIcon/>}/>
                    <MarkButton format="code" icon={<CodeIcon/>}/>
                    <BlockButton format="heading-one" icon={<LooksOneIcon/>}/>
                    <BlockButton format="heading-two" icon={<LooksTwoIcon/>}/>
                    <BlockButton format="numbered-list" icon={<FormatListNumberedIcon/>}/>
                    <BlockButton format="bulleted-list" icon={<FormatListBulletedIcon/>}/>
                </Space>

            } bordered={false} style={{width: '40%'}}>
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    spellCheck
                    autoFocus
                    />
            </Card>
        </Slate>
    )
}


export default RichText