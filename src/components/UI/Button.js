import {useSlate} from "slate-react";
import {Button} from "antd";
import React from "react";
import {isBlockActive, isMarkActive, toggleBlock, toggleMark} from "../../slate/utils";

export const BlockButton = ({format, icon}) => {
    const editor = useSlate()
    return (
        <Button
            type="default"
            icon={icon}
            size='large'
            active={isBlockActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
        </Button>
    )
}




export const MarkButton = ({format, icon}) => {
    const editor = useSlate()
    return (
        <Button
            type="default"
            icon={icon}
            size='large'
            active={isMarkActive(editor, format) || undefined}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}

        />
    )
}