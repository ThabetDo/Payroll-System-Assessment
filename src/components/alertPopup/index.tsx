import Modal from "components/modal";
import {AlertPopupWrapper} from "./styles";
import {IconX} from "@tabler/icons-react";

interface IProps {
    opened: boolean;
    title: string;
    description: JSX.Element | string;
    Footer?: JSX.Element;
    withCancelButton?: boolean;
    customHeigtht?: string;
    customMinWidth?: string;

    onClose(): void;
}

export default function AlertPopup({
                                       onClose,
                                       opened,
                                       title,
                                       description,
                                       Footer,
                                       withCancelButton = true,
                                       customHeigtht = "auto",
                                       customMinWidth,
                                   }: IProps) {
    return (
        <Modal
            onClose={onClose}
            opened={opened}
            withCloseButton={false}
            radius={"16px"}
        >
            <AlertPopupWrapper
                $customHeigtht={customHeigtht}
                $customMinWidth={customMinWidth}
            >
                <div className='header'>
                    <div className='headerContainer'>
                        <p>{title}</p>
                        {withCancelButton && (
                            <p className='closeIcon'>
                                <IconX onClick={onClose}/>
                            </p>
                        )}
                    </div>
                </div>
                <div className='Body'>
                    <p>{description}</p>
                </div>
                <div className='Footer'>{Footer && Footer}</div>
            </AlertPopupWrapper>
        </Modal>
    );
}
