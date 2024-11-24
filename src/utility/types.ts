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