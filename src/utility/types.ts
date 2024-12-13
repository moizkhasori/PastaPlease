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
    themeNo: number
}

export interface PopupType{
    isOpened: boolean
}

export interface Themetype extends QuestionAnswerType{
    // add bg color etc
}

export interface QuestionContextType{
    questionContextState: QuestionAnswerType,
    setQuestionContextState: React.Dispatch<React.SetStateAction<QuestionAnswerType>>
}

export interface PopupContextType{
    popupContextState: PopupType,
    setPopupContextState: React.Dispatch<React.SetStateAction<PopupType>>
}

export interface ContextType{
    contextState: QuestionAnswerType,
    setContextState: React.Dispatch<React.SetStateAction<QuestionAnswerType>>
}
