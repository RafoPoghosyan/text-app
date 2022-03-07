
import React from "react";
import {Text} from 'slate';
 const escapeHtml = require("escape-html");

const serializeReducer = (acc = [], node) => {
    const className = Object.entries(node).reduce((classNames, [prop]) => [...classNames, prop], []);


    const classAttribute = className.length
        ? ` class="${className.join(" ")}"`
        : "";

    if (Text.isText(node)) {
        return classAttribute
            ? `${acc}<span${classAttribute}>${escapeHtml(node.text)}</span>`
            : `${acc}${escapeHtml(node.text)}`;
    }
    

    const children = node.children.reduce(serializeReducer, "");

    switch (node.type) {
        case "bulleted-list":
            return `${acc}<ul ${classAttribute}  draggable={true}>${children}</ul>`;
        case "list-item":
            return `${acc}<li ${classAttribute}  draggable={true} >${children}</li>`;
        case "paragraph":
            return `${acc}<p ${classAttribute}  draggable={true}>${children}</p>`;
        case "heading-one":
            return `${acc}<h1 ${classAttribute}  draggable={true} >${children}</h1>`;
        case "heading-two":
            return `${acc}<h2 ${classAttribute}  draggable={true} >${children}</h2>`;
        case "numbered-list":
            return `${acc}<ol ${classAttribute}  draggable={true} >${children}</ol>`;
        case "bold":
            return `${acc}<strong ${classAttribute}  draggable={true} >${children}</strong>`;
        case "code" :
            return `${acc}<code ${classAttribute}  draggable={true} >${children}</code>`;
        default:
            return `${acc}${children}`;
    }
};


export const serializeHtml = (nodes) => {
    const serializedHtml = nodes.reduce(serializeReducer, "");
    return `${serializedHtml}`;
};


