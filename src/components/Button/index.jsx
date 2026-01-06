import { ButtonRed,ButtonTransparent } from "./styles";


function Button({ children, red,...rest}) {
    return (
        <>
            {red ? (
                <ButtonRed {...rest}>{children}</ButtonRed>
            ):(
            <ButtonTransparent {...rest}>{children}</ButtonTransparent>
            )}
        </>
    )
}

export default Button;