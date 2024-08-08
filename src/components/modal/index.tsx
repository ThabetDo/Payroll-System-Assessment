import {Modal as MantineModal, ModalProps} from '@mantine/core';

export default function Modal(props: ModalProps) {
    const {children, centered = true, size = 'auto', ...rest} = props;
    return (
        <MantineModal size={size} centered={centered} {...rest}>
            {children}
        </MantineModal>
    );
}
