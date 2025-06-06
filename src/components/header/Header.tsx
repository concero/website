import type { FC } from "react";
import { Button } from "@concero/ui-kit"
import "./Header.pcss";

export const Header: FC = (): JSX.Element => {

    return (
        <header className="header">
            <div className="header_logo_container">
                <img src="/Header/Concero.svg" alt="Concero"/>
            </div>
            <div className="header_actions_container">
                <div className="header_actions">
                    <Button size="s" variant="secondary_color">Open Testnet</Button>
                    <Button size="s" variant="primary">Contact us</Button>


                </div>
            </div>
        </header>
    )

}