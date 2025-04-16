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


export interface QuestionAnswerType{
    question: string,
    yesBtnText: string,
    noBtnText: string,
    answer: string,
    themeNo: number
}

export interface PopupType{
    isOpened: boolean,
}

export interface ThemeType{
    backgroundColor: string,
    questionAnswerColor:string,
    buttonColor:string,
    buttonHoverColor: string,
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

export interface ThemeContextType{
    themeContextState: ThemeType,
    setThemeContextState: React.Dispatch<React.SetStateAction<ThemeType>>
}


export interface PastaOptions{
    question: string,
    yesButtonText: string,
    noButtonText: string,
    answer: string,
    themeValue: number,
    themeModified?: boolean,
    themeBgColor: string,
    themeQuestionAnswerColor: string,
    themeButtonColor:string,
    themeButtonHoverColor: string
}