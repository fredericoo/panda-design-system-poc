import { Preset } from '@pandacss/types';
import * as style_engine_types_jsx from 'style-engine/types/jsx';

declare const preset: Preset;

declare const Button: style_engine_types_jsx.StyledComponent<"button", {
    variant?: "primary" | "secondary" | undefined;
}>;
declare type ButtonProps = Parameters<typeof Button>[0];

declare const Header: ({ text }: {
    text: string;
}) => JSX.Element;

export { Button, ButtonProps, Header, preset };
