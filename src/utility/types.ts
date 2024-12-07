import React from "react";

export interface Diamension {
    width: number,
    height: number
}

export interface Range {
    min: number,
    max: number
}

export interface Position {
    top: number,
    left: number
}

export type ButtonRef = HTMLButtonElement | null;

export interface CustomButtonProps {
    onClick: () => void,
    isPositioned?: boolean,
    position: Position,
    children: React.ReactNode,
    type: "yesbtn" | "nobtn"
}

export interface TextFieldProps{
    text: string,    
}

export type ButtonLabel = "question" | "yesBtnText" | "noBtnText" | "answer";
export interface QuestionAnswerType{
    question: string,
    yesBtnText: string,
    noBtnText: string,
    answer: string,
    popupState: boolean
}

export interface ContextType{
    contextState: QuestionAnswerType,
    setContextState: React.Dispatch<React.SetStateAction<QuestionAnswerType>>
}